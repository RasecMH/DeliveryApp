import React from 'react';
import './OrdersCard.css';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router';

function OrdersCard({ id, status, date, price }) {
  const history = useHistory();

  return (
    <button
      onClick={ () => history.push(`/customer/orders/${id}`) }
      type="button"
      className="OrderContainer"
    >
      <div>
        <p>Pedido</p>
        <p
          data-testid={ `customer_orders__element-order-id-${id}` }
        >
          {id}

        </p>
      </div>
      <p
        data-testid={ `customer_orders__element-delivery-status-${id}` }
      >
        {status}
      </p>
      <div>
        <p
          data-testid={ `customer_orders__element-order-date-${id}` }
        >
          {date.toLocaleDateString(
            'pt-BR',
            { year: 'numeric', month: '2-digit', day: '2-digit' },
          )}

        </p>
        <p
          data-testid={ `customer_orders__element-card-price-${id}` }
        >
          R$
          <span data-testid={ `customer_orders__element-card-price-${id}` }>
            {price.replace(/\./, ',')}
          </span>

        </p>
      </div>
    </button>
  );
}

OrdersCard.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default OrdersCard;
