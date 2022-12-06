import React from 'react';
import { PropTypes } from 'prop-types';
import './ItemCard.css';

function ItemCard({ index, id, price, img, description }) {
  return (
    <div key={ id } className="containerItem">
      <span
        data-testid={ `customer_products__element-card-price-${index}` }
      >
        R$
        {' '}
        {price}

      </span>
      <img
        data-testid={ `customer_products__img-card-bg-image-${index}` }
        src={ img }
        alt={ description }
      />
      <span
        data-testid={ `customer_products__element-card-title-${index}` }
      >
        {description}

      </span>
      <div>
        <button type="button">-</button>
        <span>0</span>
        <button type="button">+</button>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  index: PropTypes.number,
  id: PropTypes.number,
  price: PropTypes.number,
  img: PropTypes.string,
  description: PropTypes.string,
}.isRequired;

export default ItemCard;
