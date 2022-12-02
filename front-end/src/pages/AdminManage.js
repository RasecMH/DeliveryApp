import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import NewUserForm from '../components/NewUserForm';
import UsersTable from '../components/UsersTable';
import allUsersData from '../utils/mocks/gelAllUsers.json';

function AdminManage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const init = async () => {
      const usersData = allUsersData;
      setData(usersData);
    };

    init();
  }, []);

  return (
    <div>
      <NavBar userType="Admin" />
      <NewUserForm />
      <UsersTable usersInfo={ data } />
    </div>
  );
}

export default AdminManage;
