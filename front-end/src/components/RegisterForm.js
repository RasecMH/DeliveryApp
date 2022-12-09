import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useLocalStorage } from 'react-use';
import axios from 'axios';

function RegisterForm() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fetchError, setfetchError] = useState(null);
  const [, setValue] = useLocalStorage('user');
  const history = useHistory();
  const passwordMinLength = 6;
  const nameMinLength = 12;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3001/users/register',
        { name: userName, email, password, role: 'customer' },
      );
      setfetchError(null);
      setValue(response.data);
      history.push('/customer/products');
    } catch (error) {
      setfetchError(error.response.data);
    }
  };
  return (
    <div className="containerItem">
      <form onSubmit={ handleSubmit }>
        <label htmlFor="nameInput">
          Nome
          <input
            data-testid="common_register__input-name"
            type="text"
            id="nameInput"
            placeholder="Seu Nome"
            value={ userName }
            onChange={ ({ target: { value } }) => setUserName(value) }
          />
        </label>
        <label htmlFor="emailInput">
          Login
          <input
            data-testid="common_register__input-email"
            type="email"
            id="emailInput"
            placeholder="email@trybeer.com.br"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
          />
        </label>
        <label htmlFor="passwordInput">
          Senha
          <input
            data-testid="common_register__input-password"
            type="password"
            id="passwordInput"
            placeholder="********"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
          />
        </label>
        <button
          data-testid="common_register__button-register"
          type="submit"
          disabled={ !(
            email.match(/\S+@\S+\.\S+/i)
            && password.length >= passwordMinLength
            && userName.length >= nameMinLength
          ) }
        >
          CADASTRAR
        </button>
      </form>
      {
        fetchError && (
          <span data-testid="common_register__element-invalid_register">
            {fetchError.message}
          </span>
        )
      }
    </div>
  );
}

export default RegisterForm;
