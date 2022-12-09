import React from 'react';
import axios from 'axios';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import loginMock from '../utils/mocks/loginMock.json';
import invalidRegisterMock from '../utils/mocks/emailMalFormedMock.json';
import productsMock from '../utils/mocks/getAllProductsMock.json'
import App from '../App';

jest.mock('axios');

describe('página de register', () => {
  beforeEach(() => {
    localStorage.removeItem('user');
  });
  afterEach(() => {
    jest.clearAllMocks();

  });
  it('testa se é possível registrar um usuário', async () => {
    const { history } = renderWithRouter(<App />);
    const registerButton = screen.getByTestId('common_login__button-register');
    userEvent.click(registerButton);

    await waitFor(() => expect(history.location.pathname).toBe('/register'));

    axios.post.mockImplementation(() => Promise.resolve(
      { data: loginMock },
    ));

    axios.get.mockImplementation(() => Promise.resolve(
      { data: productsMock },
    ));
    
    const nameInput = screen.getByTestId('common_register__input-name');
    expect(nameInput).toBeInTheDocument();

    const emailInput = screen.getByTestId('common_register__input-email');
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByTestId('common_register__input-password');
    expect(passwordInput).toBeInTheDocument();

    const registerButton2 = screen.getByTestId('common_register__button-register');
    expect(registerButton2).toBeInTheDocument();
    expect(registerButton2).toBeDisabled();
    
    userEvent.type(nameInput, '123456');
    userEvent.type(emailInput, 'invalidEmail');
    userEvent.type(passwordInput, 'pass');
    expect(registerButton2).toBeDisabled();

    userEvent.clear(nameInput);
    userEvent.clear(emailInput);
    userEvent.clear(passwordInput);

    userEvent.type(nameInput, 'usuario valido');
    userEvent.type(emailInput, 'usuario@valido.com');
    userEvent.type(passwordInput, 'passwordValida');
    expect(registerButton2).not.toBeDisabled();
    userEvent.click(registerButton2);

    await waitFor(() => expect(history.location.pathname).toBe('/customer/products'));

  });

  it('testa messagem de erro', async () => {
    const { history } = renderWithRouter(<App />);
    const registerButton = screen.getByTestId('common_login__button-register');
    userEvent.click(registerButton);

    await waitFor(() => expect(history.location.pathname).toBe('/register'));

    axios.post.mockRejectedValue({status: 409, response: {data: invalidRegisterMock} });
    
    const nameInput = screen.getByTestId('common_register__input-name');
    const emailInput = screen.getByTestId('common_register__input-email');
    const passwordInput = screen.getByTestId('common_register__input-password');
    const registerButton2 = screen.getByTestId('common_register__button-register');
    
    userEvent.type(nameInput, 'Cliente Zé Birita');
    userEvent.type(emailInput, 'zebirita@email.com');
    userEvent.type(passwordInput, '$#zebirita#$');
    expect(registerButton2).not.toBeDisabled();
    userEvent.click(registerButton2);

    const errorMessage = await screen.findByTestId('common_register__element-invalid_register');
    expect(errorMessage).toBeInTheDocument();

  });

});
