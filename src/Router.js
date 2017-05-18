import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Balance from './components/Balance';
import AddTransaction from './components/AddTransaction';
import ViewTransactions from './components/ViewTransactions';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth" initial>
        <Scene
          key="login"
          component={LoginForm}
          title="Login"
          initial
        />
      </Scene>

      <Scene key="main">
        <Scene
          key="balance"
          component={Balance}
          title="Balance"
        />

        <Scene
          key="addTransaction"
          component={AddTransaction}
          title="Add Transaction"
        />

        <Scene
          key="viewTransactions"
          component={ViewTransactions}
          title="View Transaction"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
