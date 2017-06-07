import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Balance from './components/Balance';
import TransactionAdd from './components/TransactionAdd';
import TransactionList from './components/TransactionList';
import TransactionEdit from './components/TransactionEdit';
import { clearAll } from './actions';

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
          initial
        />

        <Scene
          key="addTransaction"
          component={TransactionAdd}
          title="Add Transaction"
        />

        <Scene
          key="viewTransactions"
          component={TransactionList}
          title="View Transaction"
          onRight={() => clearAll()}
          rightTitle="Clear All"
        />

        <Scene
          key="transactionEdit"
          component={TransactionEdit}
          title="Edit Transaction"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
