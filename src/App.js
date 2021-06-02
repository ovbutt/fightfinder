import React from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/performance';
import 'firebase/analytics';
import 'firebase/firestore'; // make sure you add this for firestore
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
// import Home from "./Home";
import configureStore from './redux/store';
import { firebase as fbConfig, rrfConfig } from './utils/config';
import './App.css';
import Router from './routes';
import { ChakraProvider } from '@chakra-ui/react';

const initialState = window && window.__INITIAL_STATE__; // set initial state here
const store = configureStore(initialState);
// Initialize Firebase instance
firebase.initializeApp(fbConfig);

export default function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={rrfConfig}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}
      >
        <ChakraProvider>
          <Router />
        </ChakraProvider>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}
