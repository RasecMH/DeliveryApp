import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className="container">
      <div className="container">
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-products"
        >
          PRODUTOS
        </button>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
        >
          MEUS PEDIDOS
        </button>
      </div>
      <div className="container">
        <p
          data-testid="customer_products__element-navbar-user-full-name"
        >
          UserName
        </p>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </button>
      </div>
    </div>
  );
}

export default NavBar;
