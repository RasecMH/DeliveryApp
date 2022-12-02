import React from 'react';
import NavBar from '../components/NavBar';
import SellerOrdersCard from '../components/SellerOrderCard';

function SellerOrders() {
  return (
    <div>
      <NavBar userType="Seller" />
      <SellerOrdersCard />
    </div>
  );
}

export default SellerOrders;
