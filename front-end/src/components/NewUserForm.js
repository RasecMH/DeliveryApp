import React from 'react';

function NewUserForm() {
  return (
    <div className="containerItem">
      <form>
        <label htmlFor="nameInput">
          Nome:
          <input
            data-testid="admin_manage__input-name"
            type="text"
            id="nameInput"
            placeholder="Nome e Sobrenome"
          />
        </label>
        <label htmlFor="emailInput">
          Email :
          <input
            data-testid="admin_manage__input-email"
            type="email"
            id="emailInput"
            placeholder="seu-email@site.com.br"
          />
        </label>
        <label htmlFor="passwordInput">
          Senha :
          <input
            data-testid="admin_manage__input-password"
            type="password"
            id="passwordInput"
            placeholder="*******"
          />
        </label>
        <label htmlFor="userTypeSelect">
          Senha :
          <select
            data-testid="admin_manage__select-role"
            name="userType"
            id="userTypeSelect"
          >
            <option value="seller">Vendedor</option>
            <option value="administrator">Administrador</option>
            <option value="customer">Vendedor</option>
          </select>
        </label>
        <button
          data-testid="admin_manage__button-register"
          type="submit"
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}

export default NewUserForm;
