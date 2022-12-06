import React from 'react';
import { PropTypes } from 'prop-types';

function CartButton({ totalValue }) {
  return (
    <div className="containerItem">
      <button
        type="button"
        data-testid="customer_products__button-cart"
      >
        Ver Carrinho:
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          R$
          {' '}
          {
            totalValue.toFixed(2)
          }
        </span>
      </button>
    </div>
  );
}

CartButton.propTypes = {
  totalValue: PropTypes.number,
}.isRequired;

export default CartButton;
