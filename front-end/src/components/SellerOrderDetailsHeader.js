import React from 'react';
import { PropTypes } from 'prop-types';
// import { useHistory } from 'react-router';
import axios from 'axios';

function SellerOrderDetailsHeader({ idPedido, saleDate, saleStatus }) {
  // const history = useHistory();

  const attStatus = async (stat) => {
    try {
      await axios.put(
        'http://localhost:3001/sales/status/att',
        { id: idPedido, status: stat },
      );
      // history.go(0);
    } catch (error) {
      console.log(error.response.data);
    }
  };

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
}.isRequired;

export default SellerOrderDetailsHeader;
