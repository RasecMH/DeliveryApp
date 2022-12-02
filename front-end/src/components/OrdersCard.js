import React from 'react';
import './OrdersCard.css';

function OrdersCard() {
  return (
    <div className="OrderContainer">
      <div data-testid="customer_orders__element-order-id-<id>">
        <p>Pedido</p>
        <p>0001</p>
      </div>
      <p
        data-testid="customer_orders__element-delivery-status-<id>"
      >
        PENDENTE
      </p>
      <div>
        <p data-testid="customer_orders__element-order-date-<id>">08/04/21</p>
        <p data-testid="customer_orders__element-card-price-<id>">R$ 23,80</p>
      </div>
    </div>
  );
}

export default OrdersCard;
