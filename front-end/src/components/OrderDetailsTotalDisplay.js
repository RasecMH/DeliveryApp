import React from 'react';
import { PropTypes } from 'prop-types';

function OrderDetailsTotalDisplay({ totalPrice }) {
  return (
    <div>
      <span data-testid="customer_order_details__element-order-total-price">
        Total: R$
        {' '}
        {totalPrice?.replace(/\./, ',')}
      </span>
    </div>
  );
}

OrderDetailsTotalDisplay.propTypes = {
  totalPrice: PropTypes.number,
}.isRequired;

export default OrderDetailsTotalDisplay;
