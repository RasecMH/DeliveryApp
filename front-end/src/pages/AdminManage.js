import React from 'react';
import NavBarAdmin from '../components/NavBarAdmin';
import NewUserForm from '../components/NewUserForm';
import UsersTable from '../components/UsersTable';

function AdminManage() {
  return (
    <div>
      <NavBarAdmin />
      <NewUserForm />
      <UsersTable />
    </div>
  );
}

export default AdminManage;
