import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import OrderDetailsHeader from '../components/OrderDetailsHeader';
import OrderDetailsTable from '../components/OrderDetailsTable';
import OrderDetailsTotalDisplay from '../components/OrderDetailsTotalDisplay';

function CustomerOrderDetails() {
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
      <NavBar />
      <OrderDetailsHeader
        idPedido={ data.id }
        sellerName={ data.seller?.name }
        saleDate={ new Date(Date.parse(data.saleDate)) }
        saleStatus={ data.status }
      />
      <OrderDetailsTable productList={ data.saleProducts } />
      <OrderDetailsTotalDisplay totalPrice={ data.totalPrice } />
    </div>
  );
}

export default CustomerOrderDetails;
