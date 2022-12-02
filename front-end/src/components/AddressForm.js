import React from 'react';

function AddressForm() {
  return (
    <div className="containerItem">
      <form>
        <label htmlFor="sellerSelect">
          P. Vendedora Responsável:
          <select
            data-testid="customer_checkout__select-seller"
            name="sellerSelect"
            id="sellerSelect"
          >
            <option value="2">Fulana Pereira</option>
          </select>
        </label>
        <label htmlFor="addressInput">
          Endereço:
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            id="addressInput"
            placeholder="Travessa Terceira, Bairro Murici"
          />
        </label>
        <label htmlFor="numberInput">
          Número:
          <input
            data-testid="customer_checkout__input-address-number"
            type="number"
            id="numberInput"
            placeholder="198"
          />
        </label>
        <button
          data-testid="customer_checkout__button-submit-order"
          type="submit"
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </div>
  );
}

export default AddressForm;
