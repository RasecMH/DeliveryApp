import React from 'react';
import axios from 'axios';
import { findByTestId, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import sellerLoginMock from '../utils/mocks/sellerLoginMock.json';
import allSalesMock from '../utils/mocks/gellAllSalesMock.json';
import createSaleMock from '../utils/mocks/createSaleMock.json';
import saleEmTrasitoMock from '../utils/mocks/attSaleStatusEmTransitoMock.json';
import salePreparandoMock from '../utils/mocks/attSaleStatusPreparandoMock.json';
import App from '../App';

jest.mock('axios');

describe('página de register', () => {
  beforeEach(() => {
    localStorage.removeItem('user');

  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('testa a atualização de um pedido', async () => {
    const mockEvent = {
      preventDefault: jest.fn(),
          target: {
             sellerSelect : { value: '2' },
          }
      }
    const { history } = renderWithRouter(<App />);

    axios.post.mockResolvedValue({ data: sellerLoginMock });
    axios.get.mockResolvedValue({ data: allSalesMock });


    const emailInput = screen.getByTestId('common_login__input-email');
    const passwordInput = screen.getByTestId('common_login__input-password');
    const loginButton = screen.getByTestId('common_login__button-login');
    userEvent.type(emailInput, 'fulana@deliveryapp.com');
    userEvent.type(passwordInput, 'fulana@123');
    userEvent.click(loginButton);
    
    await waitFor(() => expect(history.location.pathname).toBe('/seller/orders'));

    axios.get.mockResolvedValue({ data: createSaleMock });
    userEvent.click(await screen.findByTestId('seller_orders__element-order-id-1'));

    const idPedido = await screen.findByTestId('seller_order_details__element-order-details-label-order-id');
    expect(idPedido).toBeInTheDocument();
    const saleDate = await screen.findByTestId('seller_order_details__element-order-details-label-order-date');
    expect(saleDate).toBeInTheDocument();
    const deliveryStatus = await screen.findByTestId('seller_order_details__element-order-details-label-delivery-status');
    expect(deliveryStatus).toBeInTheDocument();
    const statusPrepararButton = await screen.findByTestId('seller_order_details__button-preparing-check');
    expect(statusPrepararButton).toBeInTheDocument();
    const statusEmTransitoButton = await screen.findByTestId('seller_order_details__button-dispatch-check');
    expect(statusEmTransitoButton).toBeInTheDocument();

    axios.put.mockRejectedValue({ data: salePreparandoMock });
    userEvent.click(statusPrepararButton);  

    axios.put.mockResolvedValue({ data: salePreparandoMock });
    userEvent.click(statusPrepararButton);

    axios.put.mockResolvedValue({ data: saleEmTrasitoMock });
    userEvent.click(await screen.findByTestId('seller_order_details__button-dispatch-check'));

  });

});
