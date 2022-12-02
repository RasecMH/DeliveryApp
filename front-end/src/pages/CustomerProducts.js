import React from 'react';
import NavBar from '../components/NavBar';
import ItemCard from '../components/ItemCard';
import CartButton from '../components/CartButton';

function CustomerProducts() {
  return (
    <div>
      <NavBar />
      <ItemCard />
      <CartButton />
    </div>
  );
}

export default CustomerProducts;
