import React from 'react';

function OrderDetailsHeader() {
  return (
    <div>
      <span
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        PEDIDO 0003
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        P. Venda: Fulanda Pereira
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        07/04/2021
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        Entregue
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

export default OrderDetailsHeader;
