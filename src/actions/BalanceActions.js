import firebase from 'firebase';

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
        console.log('firebase loaded: ', snapshot);

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

const getFirebaseRef = () => {
  const { currentUser } = firebase.auth();

  return firebase.database().ref(`/users/${currentUser.uid}`);
};
