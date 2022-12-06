import React, { useEffect, useState } from 'react';
import './CustomerProducts.css';
import axios from 'axios';
import { useLocalStorage } from 'react-use';
import NavBar from '../components/NavBar';
import ItemCard from '../components/ItemCard';
import CartButton from '../components/CartButton';

function CustomerProducts() {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useLocalStorage('cartItems', []);

  const addItemToLocalStorage = ({ id, name, price, urlImage, quantity }) => {
    const hasItem = value.findIndex((item) => item.id === id);
    if (hasItem >= 0) {
      value[hasItem].quantity += 1;
      setValue([...value]);
    } else {
      setValue([...value, { id, name, price, urlImage, quantity }]);
    }
  };

  const removeItemFromLocalStorage = (id) => {
    const hasItem = value.findIndex((item) => item.id === id);
    if (hasItem >= 0 && value[hasItem].quantity > 1) {
      value[hasItem].quantity -= 1;
      return setValue([...value]);
    }
    if (hasItem >= 0) {
      value.splice(hasItem, 1);
      return setValue([...value]);
    }
  };

  useEffect(() => {
    const init = async () => {
      const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data);
      console.log(response.data);
    };
    init();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="itemsContainer">
        {
          products.map((product, i) => (
            <ItemCard
              key={ product.id }
              id={ product.id }
              index={ i }
              price={ product.price }
              img={ product.urlImage }
              description={ product.name }
              addItem={ addItemToLocalStorage }
              removeItem={ removeItemFromLocalStorage }
              qtd={ value.find((item) => item.id === product.id)?.quantity || 0 }
            />
          ))
        }
      </div>
      <CartButton />
    </div>
  );
}

export default CustomerProducts;
