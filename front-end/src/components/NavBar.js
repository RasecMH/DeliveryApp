import React from 'react';
import { PropTypes } from 'prop-types';
import './NavBar.css';

function NavBar({ userType = 'customer' }) {
  return (
    <div className="container">
      <div className="container">
        {
          userType === 'customer' && (
            <button
              type="button"
              data-testid="customer_products__element-navbar-link-products"
            >
              PRODUTOS
            </button>
          )
        }
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

NavBar.propTypes = {
  userType: PropTypes.string,
}.isRequired;

export default NavBar;
