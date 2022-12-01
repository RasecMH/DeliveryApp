import React from 'react';
import NavBar from '../components/NavBar';
import NewUserForm from '../components/NewUserForm';
import UsersTable from '../components/UsersTable';

function AdminManage() {
  return (
    <div>
      <NavBar userType="Admin" />
      <NewUserForm />
      <UsersTable />
    </div>
  );
}

export default AdminManage;
