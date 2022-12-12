import React from 'react';
import axios from 'axios';
import { findByTestId, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import loginMock from '../utils/mocks/loginMock.json';
import sellerLoginMock from '../utils/mocks/sellerLoginMock.json';
import adminLoginMock from '../utils/mocks/adminLoginMock.json';
import productsMock from '../utils/mocks/getAllProductsMock.json';
import allSalesMock from '../utils/mocks/gellAllSalesMock.json';
import allUsers from '../utils/mocks/gelAllUsers.json';
import createSaleMock from '../utils/mocks/createSaleMock.json';
import allSellersMock from '../utils/mocks/allSellersMock.json';
import saleEmTrasitoMock from '../utils/mocks/attSaleStatusEmTransitoMock.json';
import saleEntregueMock from '../utils/mocks/attSaleStatusEntregueMock.json';
import App from '../App';

jest.mock('axios');

describe('página de register', () => {
  beforeEach(() => {
    localStorage.removeItem('user');

  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('testa NavBar', async () => {
    const { history } = renderWithRouter(<App />);

    axios.post.mockResolvedValue({ data: loginMock });
    axios.get.mockResolvedValue({ data: productsMock });

    const emailInput = screen.getByTestId('common_login__input-email');
    const passwordInput = screen.getByTestId('common_login__input-password');
    const loginButton = screen.getByTestId('common_login__button-login');
    userEvent.type(emailInput, 'zebirita@email.com');
    userEvent.type(passwordInput, '$#zebirita#$');
    userEvent.click(loginButton);
    
    const ordersButton = await screen.findByTestId('customer_products__element-navbar-link-orders');
    expect(ordersButton).toBeInTheDocument();

    const usernameDisplay = await screen.findByText('Cliente Zé Birita');
    expect(usernameDisplay).toBeInTheDocument();

    axios.get.mockResolvedValue({ data: allSalesMock });
    
    userEvent.click(ordersButton);
    await waitFor(() => expect(history.location.pathname).toBe('/customer/orders'));
    
    axios.get.mockResolvedValue({ data: productsMock });
    const productsButton = await screen.findByTestId('customer_products__element-navbar-link-products');
    expect(productsButton).toBeInTheDocument();
    userEvent.click(productsButton);
    await waitFor(() => expect(history.location.pathname).toBe('/customer/products'));

    const logoutButton = await screen.findByTestId('customer_products__element-navbar-link-logout');
    expect(logoutButton).toBeInTheDocument();
    userEvent.click(logoutButton);

    await waitFor(() => expect(history.location.pathname).toBe('/login'));

    axios.post.mockResolvedValue({ data: sellerLoginMock });
    axios.get.mockResolvedValue({ data: allSalesMock });

    userEvent.type(await screen.findByTestId('common_login__input-email'), sellerLoginMock.email);
    userEvent.type(await screen.findByTestId('common_login__input-password'), 'fulana@123');
    userEvent.click(await screen.findByTestId('common_login__button-login'));

    await waitFor(() => expect(history.location.pathname).toBe('/seller/orders'));
    userEvent.click(await screen.findByTestId('customer_products__element-navbar-link-orders'));
    userEvent.click(await screen.findByTestId('customer_products__element-navbar-link-logout'));

    await waitFor(() => expect(history.location.pathname).toBe('/login'));

    axios.post.mockResolvedValue({ data: adminLoginMock });
    axios.get.mockResolvedValue({ data: allUsers });

    userEvent.type(await screen.findByTestId('common_login__input-email'), adminLoginMock.email);
    userEvent.type(await screen.findByTestId('common_login__input-password'), '--adm2@21!!--');
    userEvent.click(await screen.findByTestId('common_login__button-login'));

    await waitFor(() => expect(history.location.pathname).toBe('/admin/manage'));
    userEvent.click(await screen.findByTestId('customer_products__element-navbar-link-orders'));

  });

  it('testa criação de um pedido', async () => {
    const mockEvent = {
      preventDefault: jest.fn(),
          target: {
             sellerSelect : { value: '2' },
          }
      }
    const { history } = renderWithRouter(<App />);

    axios.post.mockResolvedValue({ data: loginMock });
    axios.get.mockResolvedValue({ data: productsMock });

    const emailInput = screen.getByTestId('common_login__input-email');
    const passwordInput = screen.getByTestId('common_login__input-password');
    const loginButton = screen.getByTestId('common_login__button-login');
    userEvent.type(emailInput, 'zebirita@email.com');
    userEvent.type(passwordInput, '$#zebirita#$');
    userEvent.click(loginButton);
    
    const price1 = await screen.findByTestId('customer_products__element-card-price-1');
    expect(price1).toBeInTheDocument();

    const img1 = await screen.findByTestId('customer_products__img-card-bg-image-1');
    expect(img1).toBeInTheDocument();

    const title1 = await screen.findByTestId('customer_products__element-card-title-1');
    expect(title1).toBeInTheDocument();

    const removeButton1 = await screen.findByTestId('customer_products__button-card-rm-item-1');
    expect(removeButton1).toBeInTheDocument();

    const quantity1 = await screen.findByTestId('customer_products__input-card-quantity-1');
    expect(quantity1).toBeInTheDocument();

    const addButton1 = await screen.findByTestId('customer_products__button-card-add-item-1');
    expect(addButton1).toBeInTheDocument();

    userEvent.click(addButton1);
    userEvent.click(addButton1);
    userEvent.click(removeButton1);
    userEvent.click(removeButton1);
    userEvent.click(removeButton1);
    userEvent.type(quantity1, "3");
    userEvent.clear(quantity1);
    userEvent.type(quantity1, "5");
    userEvent.type(quantity1, "5");
    userEvent.click(removeButton1);
    
    const removeButton2 = await screen.findByTestId('customer_products__button-card-rm-item-2');
    expect(removeButton2).toBeInTheDocument();

    const quantity2 = await screen.findByTestId('customer_products__input-card-quantity-2');
    expect(quantity2).toBeInTheDocument();

    const addButton2 = await screen.findByTestId('customer_products__button-card-add-item-2');
    expect(addButton2).toBeInTheDocument();
    userEvent.click(addButton2);

    axios.get.mockResolvedValue({ data: allSellersMock }); 
    const cartButton = await screen.findByTestId('customer_products__checkout-bottom-value');
    expect(cartButton).toBeInTheDocument();
    userEvent.click(cartButton);

    await waitFor(() => expect(history.location.pathname).toBe('/customer/checkout'));

    const saleItem1 = await screen.findByTestId('customer_checkout__element-order-table-item-number-0');
    expect(saleItem1).toBeInTheDocument();
    const saleTitle1 = await screen.findByTestId('customer_checkout__element-order-table-name-0');
    expect(saleTitle1).toBeInTheDocument();
    const saleQuantity1 = await screen.findByTestId('customer_checkout__element-order-table-quantity-0');
    expect(saleQuantity1).toBeInTheDocument();
    const salePrice1 = await screen.findByTestId('customer_checkout__element-order-table-unit-price-0');
    expect(salePrice1).toBeInTheDocument();
    const saleSubTotal1 = await screen.findByTestId('customer_checkout__element-order-table-sub-total-0');
    expect(saleSubTotal1).toBeInTheDocument();
    const saleRemoveButton1 = await screen.findByTestId('customer_checkout__element-order-table-remove-0');
    expect(saleRemoveButton1).toBeInTheDocument();
    userEvent.click(saleRemoveButton1);

    const sellerSelect = await screen.findByTestId('customer_checkout__select-seller');
    expect(sellerSelect).toBeInTheDocument();
    
    const addressInput = await screen.findByTestId('customer_checkout__input-address');
    expect(addressInput).toBeInTheDocument();
    
    const numberInput = await screen.findByTestId('customer_checkout__input-address-number');
    expect(numberInput).toBeInTheDocument();
    
    
    const createSaleButton = await screen.findByTestId('customer_checkout__button-submit-order');
    expect(createSaleButton).toBeInTheDocument();

    userEvent.selectOptions(sellerSelect, '2');
    userEvent.type(addressInput, 'meu endereço');
    userEvent.type(numberInput, '123');
    axios.post.mockRejectedValue({ status: 500, response: {data: {message: 'error'}} });
    userEvent.click(createSaleButton);
    axios.post.mockResolvedValue({ data: createSaleMock });
    axios.get.mockResolvedValue({ data: saleEmTrasitoMock });
    userEvent.click(createSaleButton);
    

    await waitFor(() => expect(history.location.pathname).toBe('/customer/orders/2'));

    const idPedido = await screen.findByTestId('customer_order_details__element-order-details-label-order-id');
    expect(idPedido).toBeInTheDocument();
    const sellerName = await screen.findByTestId('customer_order_details__element-order-details-label-seller-name');
    expect(sellerName).toBeInTheDocument();
    const saleDante = await screen.findByTestId('customer_order_details__element-order-details-label-order-date');
    expect(saleDante).toBeInTheDocument();
    const deliveryStatus = await screen.findByTestId('customer_order_details__element-order-details-label-delivery-status');
    expect(deliveryStatus).toBeInTheDocument();
    const statusButton = await screen.findByTestId('customer_order_details__button-delivery-check');
    expect(statusButton).toBeInTheDocument();

    axios.put.mockRejectedValue({ data: saleEntregueMock });
    userEvent.click(statusButton);  

    axios.put.mockResolvedValue({ data: saleEntregueMock });
    userEvent.click(statusButton);
    
    axios.get.mockResolvedValue({ data: allSalesMock });
    userEvent.click(await screen.findByTestId('customer_products__element-navbar-link-orders'));

    axios.get.mockResolvedValue({ data: createSaleMock });
    userEvent.click(await screen.findByTestId('customer_orders__element-order-id-1'));
    
  });

});
