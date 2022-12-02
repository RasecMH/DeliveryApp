import React from 'react';

function SellerOrderDetailsTable() {
  return (
    <div>
      <table>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
        <tr>
          <td
            data-testid="seller_order_details__element-order-table-item-number-<index>"
          >
            1
          </td>
          <td
            data-testid="seller_order_details__element-order-table-name-<index>"
          >
            Cerveja Stella 250ml
          </td>
          <td
            data-testid="seller_order_details__element-order-table-quantity-<index>"
          >
            4

          </td>
          <td
            data-testid="seller_order_details__element-order-table-unit-price-<index>"
          >
            R$ 4,10

          </td>
          <td
            data-testid="seller_order_details__element-order-table-sub-total-<index>"
          >
            R$ 16,40
          </td>
        </tr>
      </table>
    </div>
  );
}

export default SellerOrderDetailsTable;
