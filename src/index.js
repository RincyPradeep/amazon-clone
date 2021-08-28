import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer,{ initialState } from './reducer';
import { StateProvider } from './StateProvider';
import Context, {FirebaseContext} from './store/FirebaseContext'
import firebase from './firebase/config'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase}}>
      <StateProvider initialState={initialState} reducer={reducer} >
        <Context>
          <App />
        </Context>
      </StateProvider>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
