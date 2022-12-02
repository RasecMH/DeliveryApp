import React from 'react';
import SellerOrderDetailsHeader from '../components/SellerOrderDetailsHeader';
import NavBar from '../components/NavBar';
import SellerOrderDetailsTable from '../components/SellerOrderDetailsTable';
import SellerOrderDetailsTotalDisplay from '../components/SellerOrderDetailsTotalDisplay';

function SellerOrderDetails() {
  return (
    <div>
      <NavBar userType="Seller" />
      <SellerOrderDetailsHeader />
      <SellerOrderDetailsTable />
      <SellerOrderDetailsTotalDisplay />
    </div>
  );
}

export default SellerOrderDetails;
