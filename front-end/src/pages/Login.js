import React from 'react';
import { Redirect } from 'react-router-dom';
import { useLocalStorage } from 'react-use';
import LoginForm from '../components/LoginForm';

function Login() {
  const [userData] = useLocalStorage('user');
  return (
    <div>
      {
        userData?.token ? (
          <Redirect to="/customer/products" />
        ) : (
          <LoginForm />
        )
      }
    </div>
  );
}

export default Login;
