import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import BalanceReducer from './BalanceReducer';

export default combineReducers({
  auth: AuthReducer,
  balance: BalanceReducer
});
