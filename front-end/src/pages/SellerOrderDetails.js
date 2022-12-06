import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import SellerOrderDetailsHeader from '../components/SellerOrderDetailsHeader';
import NavBar from '../components/NavBar';
import SellerOrderDetailsTable from '../components/SellerOrderDetailsTable';
import SellerOrderDetailsTotalDisplay from '../components/SellerOrderDetailsTotalDisplay';

function SellerOrderDetails() {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const init = async () => {
      const saleId = location.pathname.split('/')[3];
      const response = await axios.get(`http://localhost:3001/sales/${saleId}`);
      setData(response.data);
      console.log(response.data);
    };
    init();
  }, []);
  return (
    <div>
      <NavBar userType="Seller" />
      <SellerOrderDetailsHeader
        idPedido={ data.id }
        saleDate={ new Date(Date.parse(data.saleDate)) }
        saleStatus={ data.status }
      />
      <SellerOrderDetailsTable productList={ data.saleProducts } />
      <SellerOrderDetailsTotalDisplay totalPrice={ data.totalPrice } />
    </div>
  );
}

export default SellerOrderDetails;
