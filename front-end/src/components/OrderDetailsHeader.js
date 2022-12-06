import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
// import { useHistory } from 'react-router';
import axios from 'axios';

function OrderDetailsHeader({ idPedido, sellerName, saleDate, saleStatus }) {
  // const history = useHistory();
  const [statusPed, setStatusPed] = useState(saleStatus);
  const attStatus = async () => {
    try {
      await axios.put(
        'http://localhost:3001/sales/status/att',
        { id: idPedido, status: 'Entregue' },
      );
      setStatusPed('Entregue');
      // history.go(0);
    } catch (error) {
      console.log(error.response.data);
    }
  };
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
        {
          statusPed === 'Entregue' ? statusPed : saleStatus
        }
      </span>
      <button
        onClick={ attStatus }
        data-testid="customer_order_details__button-delivery-check"
        disabled={ saleStatus !== 'Em Trânsito' || statusPed === 'Entregue' }
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
