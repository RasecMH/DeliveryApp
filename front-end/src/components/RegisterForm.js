import React from 'react';

function RegisterForm() {
  return (
    <div className="containerItem">
      <form>
        <label htmlFor="nameInput">
          Login
          <input
            data-testid="common_register__input-name"
            type="text"
            id="nameInput"
            placeholder="Seu Nome"
          />
        </label>
        <label htmlFor="emailInput">
          Login
          <input
            data-testid="common_register__input-email"
            type="email"
            id="emailInput"
            placeholder="email@trybeer.com.br"
          />
        </label>
        <label htmlFor="passwordInput">
          Senha
          <input
            data-testid="common_register__input-password"
            type="password"
            id="passwordInput"
            placeholder="********"
          />
        </label>
        <button
          data-testid="common_register__button-register"
          type="submit"
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
