

// import React from 'react'
// import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
// import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'
// import { FaRegSave as Save } from 'react-icons/fa'

// class SavePlugin extends Plugin {
//     init() {
//         const editor = this.editor;

//         editor.ui.componentFactory.add( 'savePlugin', locale => {
//             const view = new ButtonView(locale);

//             view.set( {
//                 label: 'Save',
//                 icon: <Save/>,
//                 tooltip: true
//             } );

//             // Callback executed once the image is clicked.
//             view.on( 'execute', () => {
//                 console.log(editor.getData())
//             } );

//             return view;
//         } );
//     }
// }
const editorConfig = {
    toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 
                'numberedList', 'blockQuote','|','insertTable', 'tableColumn', 
                'tableRow', 'mergeTableCells', '|'  ],
    heading: {
        options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
            { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' }
        ]
    },
}
export default editorConfig
