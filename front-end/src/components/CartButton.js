import React from 'react';

function CartButton() {
  return (
    <div className="containerItem">
      <button
        type="button"
        data-testid="customer_products__button-cart"
      >
        Ver Carrinho:
        <span data-testid="customer_products__checkout-bottom-value">R$ 15,00</span>
      </button>
    </div>
  );
}

export default CartButton;
