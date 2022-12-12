import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useLocalStorage } from 'react-use';

function AddressForm() {
  const [sellers, setSellers] = useState([]);
  const [sellerSelect, setSellerSelect] = useState('');
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [cartItems, , removeCart] = useLocalStorage('cartItems');
  const [userData] = useLocalStorage('user');
  const history = useHistory();

  useEffect(() => {
    const init = async () => {
      const response = await axios.get('http://localhost:3001/users/all/sellers');
      setSellers(response.data);
      setSellerSelect(response.data[0].id);
    };
    init();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sale = {
      userId: userData.id,
      sellerId: sellerSelect,
      totalPrice: cartItems.reduce((acc, c) => c.price * c.quantity + acc, 0),
      deliveryAddress: address,
      deliveryNumber: addressNumber,
      status: 'Pendente',
      salesProducts: [...cartItems],
    };

    try {
      const response = await axios.post(
        'http://localhost:3001/sales/create',
        sale,
        { headers: {
          Authorization: userData.token,
        } },
      );
      removeCart();
      history.push(`/customer/orders/${response.data.id}`);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="containerItem">
      <form onSubmit={ handleSubmit }>
        <label htmlFor="sellerSelect">
          P. Vendedora Responsável:
          <select
            data-testid="customer_checkout__select-seller"
            name="sellerSelect"
            id="sellerSelect"
            onChange={ ({ target: { value } }) => setSellerSelect(value) }
          >
            {
              sellers.map((seller) => (
                <option
                  key={ seller.id }
                  value={ seller.id }
                >
                  {seller.name}
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="addressInput">
          Endereço:
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            id="addressInput"
            placeholder="Travessa Terceira, Bairro Murici"
            value={ address }
            onChange={ ({ target: { value } }) => setAddress(value) }
          />
        </label>
        <label htmlFor="numberInput">
          Número:
          <input
            data-testid="customer_checkout__input-address-number"
            type="number"
            id="numberInput"
            placeholder="198"
            value={ addressNumber }
            onChange={ ({ target: { value } }) => setAddressNumber(value) }
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
