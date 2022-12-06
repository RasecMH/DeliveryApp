import React from 'react';
import { PropTypes } from 'prop-types';

function SellerOrderDetailsTotalDisplay({ totalPrice }) {
  return (
    <div>
      <span
        data-testid="seller_order_details__element-order-total-price"
      >
        Total: R$
        {' '}
        {totalPrice?.replace(/\./, ',')}
      </span>
    </div>
  );
}

SellerOrderDetailsTotalDisplay.propTypes = {
  totalPrice: PropTypes.number,
}.isRequired;

export default SellerOrderDetailsTotalDisplay;
