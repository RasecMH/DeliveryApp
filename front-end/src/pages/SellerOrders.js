import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import SellerOrdersCard from '../components/SellerOrderCard';
import './CustomerOrders.css';

function SellerOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const init = async () => {
      const response = await axios.get('http://localhost:3001/sales');
      setOrders(response.data);
    };
    init();
  }, []);
  return (
    <div>
      <NavBar userType="Seller" />
      <div className="ordersContainers">
        {
          orders.map((order) => (
            <SellerOrdersCard
              key={ order.id }
              id={ order.id }
              status={ order.status }
              date={ new Date(Date.parse(order.saleDate)) }
              price={ order.totalPrice }
              address={ `${order.deliveryAddress}, ${order.deliveryNumber}` }
            />

          ))
        }
      </div>
    </div>
  );
}

export default SellerOrders;
