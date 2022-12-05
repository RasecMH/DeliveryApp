import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Content from './pages/Content';
import AdminManage from './pages/AdminManage';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerProducts from './pages/CustomerProducts';
import CustomerCheckout from './pages/CustomerCheckout';
import CustomerOrderDetails from './pages/CustomerOrderDetails';
import CustomerOrders from './pages/CustomerOrders';
import SellerOrders from './pages/SellerOrders';
import SellerOrderDetails from './pages/SellerOrderDetails';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Content } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/customer/products" component={ CustomerProducts } />
        <Route path="/customer/checkout" component={ CustomerCheckout } />
        <Route path="/customer/orders/:id" component={ CustomerOrderDetails } />
        <Route path="/customer/orders/" component={ CustomerOrders } />
        <Route path="/seller/orders/:id" component={ SellerOrderDetails } />
        <Route path="/seller/orders/" component={ SellerOrders } />
        <Route path="/admin/manage" component={ AdminManage } />
      </Switch>
    </div>
  );
}

export default App;
