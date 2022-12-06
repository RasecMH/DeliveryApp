import React from 'react';
import './OrdersCard.css';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router';

function SellerOrdersCard({ id, status, date, price, address }) {
  const history = useHistory();

  return (
    <button
      onClick={ () => history.push(`/seller/orders/${id}`) }
      type="button"
      className="OrderContainer"
    >
      <div>
        <p>Pedido</p>
        <p data-testid={ `seller_orders__element-order-id-${id}` }>{id}</p>
      </div>
      <div>
        <div className="OrderContainer">
          <p
            data-testid={ `seller_orders__element-delivery-status-${id}` }
          >
            {status}
          </p>
          <div>
            <p
              data-testid={ `seller_orders__element-order-date-${id}` }
            >
              {date.toLocaleDateString()}
            </p>
            R$
            <span
              data-testid={ `seller_orders__element-card-price-${id}` }
            >
              {price.replace(/\./, ',')}
            </span>
          </div>
        </div>
        <p
          data-testid={ `seller_orders__element-card-address-${id}` }
        >
          {address}

        </p>
      </div>
    </button>
  );
}

SellerOrdersCard.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.number,
  address: PropTypes.string,
}.isRequired;

export default SellerOrdersCard;
