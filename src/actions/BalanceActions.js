import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  BALANCE_FETCH,
  BALANCE_FETCH_SUCCESS,
} from './types';

export const balanceFetch = () => {
  // get firebase ref
  const balanceRef = getFirebaseRef();

  return (dispatch) => {
    dispatch({ type: BALANCE_FETCH });

    balanceRef
      .on('value', snapshot => {
        dispatch({
          type: BALANCE_FETCH_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};

export const balanceUpdate = ({ balance }) => {
  const balanceRef = getFirebaseRef();

  return () => {
    balanceRef
      .update({ balance })
      .then(() => {
        console.log('Successfully saved!');
      });
  };
};

export const addTransaction = ({ dateEntered, amount, note }) => {
  const balanceRef = getFirebaseRef();
  const transactionsRef = getFirebaseRefTransactions();

  console.log('{ dateEntered, amount, note }: ', { dateEntered, amount, note });

  return () => {
    // get the current balanceRef
    balanceRef.toString();

    // update that balance

    // add the transaction
    transactionsRef
      .push({ dateEntered, amount, note })
      .then(() => {
        // go back a page
        Actions.pop();
      });
  };
};

const getFirebaseRefBaseString = () => {
  const { currentUser } = firebase.auth();

  return `/users/${currentUser.uid}`;
};

const getFirebaseRef = () => {
  return firebase.database().ref(getFirebaseRefBaseString());
};

const getFirebaseRefTransactions = () => {
  const ref = getFirebaseRefBaseString() + '/transactions';

  return firebase.database().ref(ref);
};
