import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//state
let state ={

  login: {
      mail:     '',
      password: ''
  },

  profile: {
      name:      '',
      data:      '',
      city:      '',
      education: '',
      webSite:   '',
      posts: [],
      currentWritingPost: ''
  },

   dialogs: {
      names: [
          {
              name: ''
          }
      ]
   },
      messages: [
          {
              message: []
          }
      ]

};


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
