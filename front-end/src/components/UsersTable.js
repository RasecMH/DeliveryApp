import React from 'react';

function UsersTable() {
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
        <tr>
          <td
            data-testid="admin_manage__element-user-table-item-number-1"
          >
            1
          </td>
          <td
            data-testid="admin_manage__element-user-table-name-1"
          >
            Fulana Pereira
          </td>
          <td
            data-testid="admin_manage__element-user-table-email-1"
          >
            fulana@deliveryapp.com

          </td>
          <td
            data-testid="admin_manage__element-user-table-role-1"
          >
            seller

          </td>
          <td
            data-testid="admin_manage__element-user-table-remove-1"
          >
            <button type="button">Excluir</button>

          </td>
        </tr>
        <tr>
          <td
            data-testid="admin_manage__element-user-table-item-number-2"
          >
            2
          </td>
          <td
            data-testid="admin_manage__element-user-table-name-2"
          >
            Cliente Zé Birita
          </td>
          <td
            data-testid="admin_manage__element-user-table-email-2"
          >
            zebirita@email.com
          </td>
          <td
            data-testid="admin_manage__element-user-table-role-2"
          >
            customer
          </td>
          <td
            data-testid="admin_manage__element-user-table-remove-2"
          >
            <button type="button">Excluir</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default UsersTable;
