import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('página de login', () => {
  beforeEach(() => {
    localStorage.removeItem('user');
  });
  it('testa se é possível fazer login', async () => {

    const { history } = renderWithRouter(<App />);

    const emailInput = screen.getByTestId('common_login__input-email');
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByTestId('common_login__input-password');
    expect(passwordInput).toBeInTheDocument();

    const registerButton = screen.getByTestId('common_login__button-register');
    expect(registerButton).toBeInTheDocument();

    const loginButton = screen.getByTestId('common_login__button-login');
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toBeDisabled();

    userEvent.type(emailInput, 'invalidEmail');
    userEvent.type(passwordInput, '123456');
    expect(loginButton).toBeDisabled();

    userEvent.clear(emailInput);
    userEvent.clear(passwordInput);

    userEvent.type(emailInput, 'valid@email.com');
    userEvent.type(passwordInput, '123');
    expect(loginButton).toBeDisabled();

    userEvent.clear(emailInput);
    userEvent.clear(passwordInput);

    userEvent.type(emailInput, 'invalidUser@email.com');
    userEvent.type(passwordInput, '$#zebirita#$');
    expect(loginButton).not.toBeDisabled();
    userEvent.click(loginButton);

    const errorMessage = await screen.findByTestId('common_login__element-invalid-email');
    expect(errorMessage).toBeInTheDocument();

    userEvent.clear(emailInput);
    userEvent.clear(passwordInput);

    userEvent.type(emailInput, 'zebirita@email.com');
    userEvent.type(passwordInput, '$#zebirita#$');
    expect(loginButton).not.toBeDisabled();
    userEvent.click(loginButton);

    await waitFor(() => expect(history.location.pathname).toBe('/customer/products'));
  });

  it('testa se é feito o redirecionamento caso já esteja logado como admin', async () => {

    const { history } = renderWithRouter(<App />);

    const emailInput = screen.getByTestId('common_login__input-email');
    const passwordInput = screen.getByTestId('common_login__input-password');
    const loginButton = screen.getByTestId('common_login__button-login');


    userEvent.type(emailInput, 'adm@deliveryapp.com');
    userEvent.type(passwordInput, '--adm2@21!!--');
    expect(loginButton).not.toBeDisabled();
    userEvent.click(loginButton);

    await waitFor(() => expect(history.location.pathname).toBe('/admin/manage'));
    history.push('/');
    await waitFor(() => expect(history.location.pathname).toBe('/admin/manage'));
  });

  it('testa se é feito o redirecionamento caso já esteja logado como seller', async () => {

    const { history } = renderWithRouter(<App />);

    const emailInput = screen.getByTestId('common_login__input-email');
    const passwordInput = screen.getByTestId('common_login__input-password');
    const loginButton = screen.getByTestId('common_login__button-login');

    userEvent.type(emailInput, 'fulana@deliveryapp.com');
    userEvent.type(passwordInput, 'fulana@123');
    expect(loginButton).not.toBeDisabled();
    userEvent.click(loginButton);

    await waitFor(() => expect(history.location.pathname).toBe('/seller/orders'));
    history.push('/');
    await waitFor(() => expect(history.location.pathname).toBe('/seller/orders'));
  });
});
