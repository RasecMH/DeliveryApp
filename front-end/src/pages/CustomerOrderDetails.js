import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import OrderDetailsHeader from '../components/OrderDetailsHeader';
import OrderDetailsTable from '../components/OrderDetailsTable';
import OrderDetailsTotalDisplay from '../components/OrderDetailsTotalDisplay';
import saleDetailsInfo from '../utils/mocks/createSaleMock.json';

function CustomerOrderDetails() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const init = async () => {
      const saleData = saleDetailsInfo;
      setData(saleData);
    };

    init();
  }, []);
  return (
    <div>
      <NavBar />
      <OrderDetailsHeader
        idPedido={ data.id }
        sellerName={ data.seller_name }
        saleDate={ data.sale_date }
        saleStatus={ data.status }
      />
      <OrderDetailsTable />
      <OrderDetailsTotalDisplay />
    </div>
  );
}

export default CustomerOrderDetails;
