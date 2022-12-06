import React from 'react';
import { PropTypes } from 'prop-types';

function SellerOrderDetailsHeader({ idPedido, saleDate, saleStatus, attStatus }) {
  return (
    <div>
      <span
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        PEDIDO 000
        {idPedido}
      </span>
      <span
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        {saleDate.toLocaleDateString(
          'pt-BR',
          { year: 'numeric', month: '2-digit', day: '2-digit' },
        )}
      </span>
      <span
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        {saleStatus}
      </span>
      <button
        onClick={ () => attStatus('Preparando') }
        data-testid="seller_order_details__button-preparing-check"
        type="button"
        disabled={ saleStatus !== 'Pendente' }

      >
        PREPARAR PEDIDO
      </button>
      <button
        onClick={ () => attStatus('Em Trânsito') }
        data-testid="seller_order_details__button-dispatch-check"
        type="button"
        disabled={ saleStatus !== 'Preparando' }
      >
        SAIU PARA ENTREGA
      </button>
    </div>
  );
}

SellerOrderDetailsHeader.propTypes = {
  idPedido: PropTypes.number,
  sellerName: PropTypes.string,
  saleDate: PropTypes.string,
  saleStatus: PropTypes.string,
  attStatus: PropTypes.function,
}.isRequired;

export default SellerOrderDetailsHeader;
