import React from 'react';
import './ItemCard.css';

function ItemCard() {
  return (
    <div className="containerItem">
      <span
        data-testid="customer_products__element-card-price-<id>"
      >
        R$ 2,20

      </span>
      <img
        data-testid="customer_products__img-card-bg-image-<id>"
        src="http://localhost:3001/images/skol_lata_350ml.jpg"
        alt="skol lata"
      />
      <span
        data-testid="customer_products__element-card-title-<id>"
      >
        Skol Lata 250ml

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
