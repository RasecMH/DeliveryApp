import React from 'react';
import AddressForm from '../components/AddressForm';
import NavBar from '../components/NavBar';
import SalesTable from '../components/SalesTable';

function CustomerCheckout() {
  return (
    <div>
      <NavBar />
      <SalesTable />
      <AddressForm />
    </div>
  );
}

export default CustomerCheckout;
