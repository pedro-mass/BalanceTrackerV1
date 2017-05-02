import {
  BALANCE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  balance: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BALANCE_UPDATE:
      return {
        ...state,
        balance: state.balance + action.payload
      };
    default:
      return state;
  }
};
