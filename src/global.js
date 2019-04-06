

import React from 'react'

const ThemeContext = React.createContext(
    /* optional default value */
  );
  
  const App = props => (
    <ThemeContext.Provider value={{ primaryColor: green }}>
      {props.children}
    </ThemeContext.Provider>
  );

  