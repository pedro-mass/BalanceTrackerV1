import {
  BALANCE_FETCH,
  BALANCE_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  balance: 0,
  transactions: {},
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BALANCE_FETCH:
      return {
        ...state,
        loading: true
      };
    case BALANCE_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
