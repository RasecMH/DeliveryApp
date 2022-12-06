import React from 'react';
import { PropTypes } from 'prop-types';

function UsersTable({ usersInfo, deleteUser }) {
  return (
    <div>
      <p>Lista de usuários</p>
      <table>
        <tr>
          <th> </th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
        {
          usersInfo.map((user, i) => (
            <tr key={ user.id }>
              <td
                data-testid={ `admin_manage__element-user-table-item-number-${i}` }
              >
                {i + 1}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-name-${i}` }
              >
                {user.name}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-email-${i}` }
              >
                {user.email}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-role-${i}` }
              >
                {user.role}
              </td>
              <td>
                <button
                  data-testid={ `admin_manage__element-user-table-remove-${i}` }
                  onClick={ () => deleteUser(user.id) }
                  type="button"
                >
                  Excluir

                </button>

              </td>
            </tr>
          ))
        }
      </table>
    </div>
  );
}

UsersTable.propTypes = {
  userType: PropTypes.array,
  deleteUser: PropTypes.function,
}.isRequired;

export default UsersTable;
