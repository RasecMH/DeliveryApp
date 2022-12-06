import React from 'react';
import { PropTypes } from 'prop-types';

import './ItemCard.css';

function ItemCard({ id, price, img, description, addItem, removeItem, qtd }) {
  return (
    <div key={ id } className="containerItem">
      <span
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        R$
        {' '}
        {price}

      </span>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ img }
        alt={ description }
      />
      <span
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {description}

      </span>
      <div>
        <button
          onClick={ () => removeItem(id) }
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }

        >
          -

        </button>
        <span
          data-testid={ `customer_products__input-card-quantity-${id}` }
        >
          {qtd}

        </span>
        <button
          onClick={ () => addItem({ id, price, urlImage: img, quantity: qtd || 1 }) }
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }

        >
          +

        </button>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  img: PropTypes.string,
  description: PropTypes.string,
  addItem: PropTypes.function,
  removeItem: PropTypes.function,
  qtd: PropTypes.number,
}.isRequired;

export default ItemCard;
