import React from 'react';
import { PropTypes } from 'prop-types';

function OrderDetailsHeader({ idPedido, sellerName, saleDate, saleStatus }) {
  return (
    <div>
      <span
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        PEDIDO 000
        {idPedido}
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        P. Venda:
        {' '}
        {sellerName}
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        {saleDate}
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        {saleStatus}
      </span>
      <button
        data-testid="customer_order_details__button-delivery-check"
        type="button"
      >
        MARCAR COMO ENTREGUE
      </button>
    </div>
  );
}

OrderDetailsHeader.propTypes = {
  idPedido: PropTypes.number,
  sellerName: PropTypes.string,
  saleDate: PropTypes.string,
  saleStatus: PropTypes.string,
}.isRequired;

export default OrderDetailsHeader;
