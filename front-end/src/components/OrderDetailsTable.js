import React from 'react';
import { PropTypes } from 'prop-types';

function OrderDetailsTable({ productList }) {
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
        {
          productList?.map((product, i) => (
            <tr key={ product.id }>
              <td
                data-testid={ `customer_checkout__element-order-table-item-number-${i}` }
              >
                {i + 1}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${i}` }
              >
                {product.name}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
              >
                {product.quantity}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }
              >
                R$
                {' '}
                {product.price.replace(/\./, ',')}

              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
              >
                R$
                {' '}
                {(product.price * product.quantity).toFixed(2).replace(/\./, ',')}
              </td>
            </tr>
          ))
        }
      </table>
    </div>
  );
}

OrderDetailsTable.propTypes = {
  productList: PropTypes.array,
}.isRequired;

export default OrderDetailsTable;
