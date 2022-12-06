import React from 'react';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router';

function CartButton({ totalValue }) {
  const history = useHistory();

  return (
    <div className="containerItem">
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => history.push('/customer/checkout') }
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
