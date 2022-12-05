import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useLocalStorage } from 'react-use';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fetchError, setfetchError] = useState(null);
  const [, setValue] = useLocalStorage('user');
  const history = useHistory();
  const passwordMinLength = 6;

  const handleRegisterBtn = () => {
    history.push('/register');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3001/users/login',
        { email, password },
      );
      setfetchError(null);
      setValue(response.data);

      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
      setfetchError(error.response.data);
    }
  };

  return (
    <div className="containerItem">
      <form onSubmit={ handleSubmit }>
        <label htmlFor="emailInput">
          Login
          <input
            data-testid="common_login__input-email"
            type="email"
            id="emailInput"
            placeholder="email@trybeer.com.br"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
          />
        </label>
        <label htmlFor="passwordInput">
          Senha
          <input
            data-testid="common_login__input-password"
            type="password"
            id="passwordInput"
            placeholder="********"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
          />
        </label>
        <button
          data-testid="common_login__button-login"
          type="submit"
          disabled={ !(
            email.match(/\S+@\S+\.\S+/i)
            && password.length >= passwordMinLength
          ) }
        >
          LOGIN
        </button>
        <button
          data-testid="common_login__button-register"
          type="button"
          onClick={ handleRegisterBtn }
        >
          Ainda não tenho uma conta
        </button>
      </form>
      {
        fetchError && (
          <span data-testid="common_login__element-invalid-email">
            {fetchError.message}
          </span>
        )
      }
    </div>
  );
}

export default LoginForm;
