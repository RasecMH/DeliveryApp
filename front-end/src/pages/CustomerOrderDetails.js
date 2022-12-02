import React from 'react';
import NavBar from '../components/NavBar';
import OrderDetailsHeader from '../components/OrderDetailsHeader';
import OrderDetailsTable from '../components/OrderDetailsTable';
import OrderDetailsTotalDisplay from '../components/OrderDetailsTotalDisplay';

function CustomerOrderDetails() {
  return (
    <div>
      <NavBar />
      <OrderDetailsHeader />
      <OrderDetailsTable />
      <OrderDetailsTotalDisplay />
    </div>
  );
}

export default CustomerOrderDetails;
