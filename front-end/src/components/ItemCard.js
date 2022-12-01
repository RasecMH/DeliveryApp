import React from 'react';
import skolImage from '../images/skol_lata_350ml.jpg';
import './ItemCard.css';

function ItemCard() {
  return (
    <div className="containerItem">
      <span
        data-testid="customer_products__element-card-price-<id>"
      >
        R$ 4,49

      </span>
      <img
        data-testid="customer_products__img-card-bg-image-<id>"
        src={ skolImage }
        alt="skol lata"
      />
      <span
        data-testid="customer_products__element-card-title-<id>"
      >
        Skol Lata

      </span>
      <div>
        <button type="button">-</button>
        <span>0</span>
        <button type="button">+</button>
      </div>
    </div>
  );
}

export default ItemCard;
