



    export const loadClientWhenGapiReady = function (script) {
        console.log('Trying To Load Client!');
        console.log(script)
        if(script.getAttribute('gapi_processed')){
          console.log('Client is ready! Now you can access gapi. :)');
            window.gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES
              }).then(function () {
                // Listen for sign-in state changes.
                window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
        
                // Handle the initial sign-in state.
                updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
                document.getElementById('authorize_button').onclick = handleAuthClick;
                document.getElementById('signout_button').onclick = handleSignoutClick;
              }, function(error) {
                appendPre(JSON.stringify(error, null, 2));
              });
          }
        else{
          console.log('Client wasn\'t ready, trying again in 100ms');
          setTimeout(() => {loadClientWhenGapiReady(script)}, 100);
        }
      }
    var API_KEY = 'AIzaSyDwZ3O-cuY9gdwkqy4MqkQ87TgB_Lc4VTs'
    var CLIENT_ID = '213089667901-m0grm3rs81m7vgvqo1bvjd6k4b9u0oqd.apps.googleusercontent.com'
    // Array of API discovery doc URLs for APIs used by the quickstart
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest", "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];

    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    var SCOPES = 'https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/drive.appfolder https://www.googleapis.com/auth/drive.install https://www.googleapis.com/auth/drive.appdata';

    var authorizeButton = document.getElementById('authorize_button');
    var signoutButton = document.getElementById('signout_button');

    /**
     *  On load, called to load the auth2 library and API client library.
     */

    function getDriveInfo() {
      window.gapi.client.request({
        'path': 'https://www.googleapis.com/drive/v3/about',
        'params':{fields: '*'}
      })
        .then(function(data){
          document.getElementById("content").innerText = data.result.user.displayName.split(" ")[0]
        })
        .catch(function(err){
          console.log(err)
        })
    } 

    function handleClientLoad() {
      window.gapi.load('client:auth2', initClient);
    }

    /**
     *  Initializes the API client library and sets up sign-in state
     *  listeners.
     */
    export function initClient() {
        const script = document.createElement("script");
    script.onload = () => {
      console.log('Loaded script, now loading our api...')
      // Gapi isn't available immediately so we have to wait until it is to use gapi.
      loadClientWhenGapiReady(script);
    };
    script.src = "https://apis.google.com/js/client.js";
    document.body.appendChild(script);
    }

    /**
     *  Called when the signed in status changes, to update the UI
     *  appropriately. After a sign-in, the API is called.
     */
    function updateSigninStatus(isSignedIn) {
      if (isSignedIn) {
        document.getElementById('authorize_button').style.display = 'none';
        document.getElementById('signout_button').style.display = 'block';
        getDriveInfo()
        listLabels();
      } else {
        document.getElementById('authorize_button').style.display = 'block';
        document.getElementById('signout_button').style.display = 'none';
      }
    }

    /**
     *  Sign in the user upon button click.
     */
    function handleAuthClick(event) {
      window.gapi.auth2.getAuthInstance().signIn();
    }

    /**
     *  Sign out the user upon button click.
     */
    function handleSignoutClick(event) {
      window.gapi.auth2.getAuthInstance().signOut();
    }

    /**
     * Append a pre element to the body containing the given message
     * as its text node. Used to display the results of the API call.
     *
     * @param {string} message Text to be placed in pre element.
     */
    function appendPre(message) {
      var pre = document.getElementById('content');
      var textContent = document.createTextNode(message + '\n');
      pre.appendChild(textContent);
    }

    /**
     * Print all Labels in the authorized user's inbox. If no labels
     * are found an appropriate message is printed.
     */
    function listLabels() {
      window.gapi.client.gmail.users.labels.list({
        'userId': 'me'
      }).then(function(response) {
        var labels = response.result.labels;
        appendPre('Labels:');

        if (labels && labels.length > 0) {
          for (var i = 0; i < labels.length; i++) {
            var label = labels[i];
            appendPre(label.name)
          }
        } else {
          appendPre('No Labels found.');
        }
      });
    }
    