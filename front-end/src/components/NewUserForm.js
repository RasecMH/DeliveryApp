import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

function NewUserForm({ handleSubmit, fetchError }) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('customer');
  const passwordMinLength = 6;
  const nameMinLength = 12;

  return (
    <div className="containerItem">
      <form onSubmit={ (e) => handleSubmit(e, { userName, email, password, userType }) }>
        <label htmlFor="nameInput">
          Nome:
          <input
            data-testid="admin_manage__input-name"
            type="text"
            id="nameInput"
            placeholder="Nome e Sobrenome"
            value={ userName }
            onChange={ ({ target: { value } }) => setUserName(value) }
          />
        </label>
        <label htmlFor="emailInput">
          Email :
          <input
            data-testid="admin_manage__input-email"
            type="email"
            id="emailInput"
            placeholder="seu-email@site.com.br"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
          />
        </label>
        <label htmlFor="passwordInput">
          Senha :
          <input
            data-testid="admin_manage__input-password"
            type="password"
            id="passwordInput"
            placeholder="*******"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
          />
        </label>
        <label htmlFor="userTypeSelect">
          Senha :
          <select
            data-testid="admin_manage__select-role"
            name="userType"
            id="userTypeSelect"
            onChange={ ({ target: { value } }) => setUserType(value) }

          >
            <option value="seller">Vendedor</option>
            <option value="administrator">Administrador</option>
            <option value="customer">Vendedor</option>
          </select>
        </label>
        <button
          data-testid="admin_manage__button-register"
          type="submit"
          disabled={ !(
            email.match(/\S+@\S+\.\S+/i)
            && password.length >= passwordMinLength
            && userName.length >= nameMinLength
          ) }
        >
          CADASTRAR
        </button>
      </form>
      {
        fetchError && (
          <span data-testid="admin_manage__element-invalid-register">
            {fetchError.message}
          </span>
        )
      }
    </div>
  );
}

NewUserForm.propTypes = {
  handleSubmit: PropTypes.function,
  fetchError: PropTypes.object,
}.isRequired;

export default NewUserForm;
