import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import OrdersCard from '../components/OrdersCard';
import './CustomerOrders.css';

function CustomerOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const init = async () => {
      const response = await axios.get('http://localhost:3001/sales');
      setOrders(response.data);
      console.log(response.data);
    };
    init();
  }, []);
  return (
    <div>
      <NavBar />
      <div className="ordersContainers">
        {
          orders.map((order) => (
            <OrdersCard
              key={ order.id }
              id={ order.id }
              status={ order.status }
              date={ new Date(Date.parse(order.saleDate)) }
              price={ order.totalPrice }
            />
          ))
        }
      </div>
    </div>
  );
}

export default CustomerOrders;
