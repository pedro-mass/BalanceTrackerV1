import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene
          key="login"
          component={LoginForm}
          title="Login"
          initial
        />
      </Scene>
    </Router>
  )
};

export default RouterComponent;
