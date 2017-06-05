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

export const balanceUpdate = ({ balance, transaction, newTransaction }) => {
  if (!newTransaction) {
    // regular balance add
    return addTransaction(transaction);
  }

  return () => {
    let newBalance = parseInt(balance, 10);
    newBalance -= parseInt(transaction.amount, 10);
    newBalance += parseInt(newTransaction.amount, 10);

    const balanceRef = getFirebaseRef();
    balanceRef.update({ balance: newBalance })
    .then(() => {
      // update the transaction
      const transactionsRef = getFirebaseRef(`transactions/${transaction.uid}`);
      const { dateEntered, amount, note } = newTransaction;

      transactionsRef
        .set({ dateEntered, amount, note })
        .then(() => {
          // go back a page
          Actions.pop();
        });
    });
  };
};

export const addTransaction = ({ dateEntered, amount, note }) => {
  const balanceRef = getFirebaseRef();
  const transactionsRef = getFirebaseRef('transactions');

  // TODO: rewrite this to use await/async
  return () => {
    // get the current balanceRef
    // TODO: get this from state instead of another call to firebase
    balanceRef.once('value')
      .then((snapshot) => {
          let balance = snapshot.val().balance;

          // update that balances
          if (balance) {
            balance = parseInt(balance, 10) + parseInt(amount, 10);
          } else {
            balance = parseInt(amount, 10);
          }

          balanceRef.update({ balance })
          .then(() => {
            // add the transaction
            transactionsRef
              .push({ dateEntered, amount, note })
              .then(() => {
                // go back a page
                Actions.pop();
              });
          });
        });
      };
};

export const deleteTransaction = ({ balance, transaction }) => {
  return () => {
    let newBalance = parseInt(balance, 10);
    newBalance -= parseInt(transaction.amount, 10);

    const balanceRef = getFirebaseRef();
    balanceRef.update({ balance: newBalance })
      .then(() => {
        // update the transaction
        const transactionsRef = getFirebaseRef(`transactions/${transaction.uid}`);
        transactionsRef.remove()
          .then(() => {
            // go back a page
            Actions.pop();
          });
      });
  };
};

const getFirebaseRef = (innerPath) => {
  const { currentUser } = firebase.auth();

  let ref = `/users/${currentUser.uid}`;

  if (innerPath) {
    ref = `${ref}/${innerPath}`;
  }

  return firebase.database().ref(ref);
};
