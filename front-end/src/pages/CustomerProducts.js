import React, { useEffect, useState } from 'react';
import './CustomerProducts.css';
import axios from 'axios';
import NavBar from '../components/NavBar';
import ItemCard from '../components/ItemCard';
import CartButton from '../components/CartButton';

function CustomerProducts() {
  const [products, setProducts] = useState([]);

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
              index={ i }
              price={ product.price }
              img={ product.urlImage }
              description={ product.name }
            />
          ))
        }
      </div>
      <CartButton />
    </div>
  );
}

export default CustomerProducts;
