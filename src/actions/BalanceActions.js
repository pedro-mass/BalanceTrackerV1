import {
  BALANCE_UPDATE
} from './types';

export const balanceUpdate = ({ amount }) => {
  return {
    type: BALANCE_UPDATE,
    payload: amount
  };
};
