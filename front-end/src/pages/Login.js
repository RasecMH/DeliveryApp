import React from 'react';
import { Redirect } from 'react-router-dom';
import { useLocalStorage } from 'react-use';
import LoginForm from '../components/LoginForm';

function Login() {
  const [userData] = useLocalStorage('user');
  const endPoint = userData?.role === 'seller' ? '/seller/orders' : '/customer/products';
  return (
    <div>
      {
        userData?.token ? (
          <Redirect to={ endPoint } />
        ) : (
          <LoginForm />
        )
      }
    </div>
  );
}

export default Login;
