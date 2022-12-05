import React from 'react';
import { useHistory } from 'react-router';

function LoginForm() {
  const history = useHistory();

  const handleRegisterBtn = () => {
    history.push('/register');
  };

  return (
    <div className="containerItem">
      <form>
        <label htmlFor="emailInput">
          Login
          <input
            data-testid="common_login__input-email"
            type="email"
            id="emailInput"
            placeholder="email@trybeer.com.br"
          />
        </label>
        <label htmlFor="passwordInput">
          Senha
          <input
            data-testid="common_login__input-password"
            type="password"
            id="passwordInput"
            placeholder="********"
          />
        </label>
        <button
          data-testid="common_login__button-login"
          type="submit"
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
    </div>
  );
}

export default LoginForm;
