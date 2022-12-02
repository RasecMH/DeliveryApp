import React from 'react';

function SellerOrderDetailsHeader() {
  return (
    <div>
      <span
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        PEDIDO 0001
      </span>
      <span
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        08/04/2021
      </span>
      <span
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        Pendente
      </span>
      <button
        data-testid="seller_order_details__button-preparing-check"
        type="button"
      >
        MARCAR COMO ENTREGUE
      </button>
      <button
        data-testid="seller_order_details__button-dispatch-check"
        type="button"
      >
        SAIU PARA ENTREGA
      </button>
    </div>
  );
}

export default SellerOrderDetailsHeader;
