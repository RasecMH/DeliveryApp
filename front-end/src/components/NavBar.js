import React from 'react';
import { PropTypes } from 'prop-types';
import { useLocalStorage } from 'react-use';
import { useHistory } from 'react-router';

import './NavBar.css';

function NavBar({ userType = 'customer' }) {
  const [value, , remove] = useLocalStorage('user');
  const [, , removeCart] = useLocalStorage('cartItems');
  const history = useHistory();

  const logout = () => {
    remove();
    removeCart();
    history.push('/');
  };

  return (
    <div className="container">
      <div className="container">
        {
          userType === 'customer' && (
            <button
              type="button"
              data-testid="customer_products__element-navbar-link-products"
              onClick={ () => history.push('/customer/products') }

            >
              PRODUTOS
            </button>
          )
        }
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ () => history.push('/customer/orders') }

        >
          MEUS PEDIDOS
        </button>
      </div>
      <div className="container">
        <p
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {value.name}
        </p>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ logout }
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
