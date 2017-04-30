import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentDidMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyDlF1W371lOQZwAc1heuUT_3KVG1PQqeic',
      authDomain: 'balancetrackerv1.firebaseapp.com',
      databaseURL: 'https://balancetrackerv1.firebaseio.com',
      projectId: 'balancetrackerv1',
      storageBucket: 'balancetrackerv1.appspot.com',
      messagingSenderId: '795095120860'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(
      reducers,
      {}, // used for initializing state
      applyMiddleware(ReduxThunk)
    );

    return (
      <Provider store={store}>
        <Router />
      </Provider>

    );
  }
}

export default App;
