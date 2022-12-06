import React from 'react';
import { PropTypes } from 'prop-types';

function OrderDetailsHeader({ idPedido, sellerName, saleDate, saleStatus, attStatus }) {
  return (
    <div>
      <span
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        PEDIDO 000
        {idPedido}
      </span>
      <span>
        P. Venda:
        {' '}
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        {sellerName}
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        {saleDate.toLocaleDateString(
          'pt-BR',
          { year: 'numeric', month: '2-digit', day: '2-digit' },
        )}
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        { saleStatus }
      </span>
      <button
        onClick={ () => attStatus('Entregue') }
        data-testid="customer_order_details__button-delivery-check"
        disabled={ saleStatus !== 'Em Trânsito' }
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
  attStatus: PropTypes.function,
}.isRequired;

export default OrderDetailsHeader;
