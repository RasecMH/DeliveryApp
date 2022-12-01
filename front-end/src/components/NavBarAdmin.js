import React from 'react';
import './NavBar.css';

function NavBarAdmin() {
  return (
    <div className="container">
      <div className="container">
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
        >
          GERENCIAR USUÁRIOS
        </button>
      </div>
      <div className="container">
        <p
          data-testid="customer_products__element-NavBarAdmin
        -user-full-name"
        >
          UserName
        </p>
        <button
          type="button"
          data-testid="customer_products__element-NavBarAdmin
        -link-logout"
        >
          Sair
        </button>
      </div>
    </div>
  );
}

export default NavBarAdmin;
