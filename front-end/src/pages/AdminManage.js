import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import NavBar from '../components/NavBar';
import NewUserForm from '../components/NewUserForm';
import UsersTable from '../components/UsersTable';

function AdminManage() {
  const [data, setData] = useState([]);
  const [fetchError, setfetchError] = useState(null);

  const [userLocal] = useLocalStorage('user');

  const deleteUser = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3001/users/${id}`,
        { headers: {
          Authorization: userLocal.token,
        } },
      );
      console.log(data);
      console.log(id);
      const newData = data.filter((d) => d.id !== id);
      console.log(newData);
      setData(newData);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const init = async () => {
    const response = await axios.get(
      'http://localhost:3001/users/all',
      { headers: {
        Authorization: userLocal.token,
      } },
    );
    setData(response.data.filter((d) => d.id !== userLocal.id));
  };

  useEffect(() => {
    init();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://localhost:3001/users/register',
        { name: e.target.nameInput.value,
          email: e.target.emailInput.value,
          password: e.target.passwordInput.value,
          role: e.target.userTypeSelect.value },
        { headers: {
          Authorization: userLocal.token,
        } },
      );
      setfetchError(null);
      init();
    } catch (error) {
      console.log(error.response.data);
      setfetchError(error.response.data);
    }
  };

  return (
    <div>
      <NavBar userType="Admin" />
      <NewUserForm handleSubmit={ handleSubmit } fetchError={ fetchError } />
      <UsersTable usersInfo={ data } deleteUser={ deleteUser } />
    </div>
  );
}

export default AdminManage;
