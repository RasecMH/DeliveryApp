import React from 'react';
import { PropTypes } from 'prop-types';

function SellerOrderDetailsTable({ productList }) {
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
                data-testid={
                  `seller_order_details__element-order-table-item-number-${product.id}`
                }
              >
                {i + 1}
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-name-${product.id}`
                }
              >
                {product.name}
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-quantity-${product.id}`
                }
              >
                {product.quantity}

              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-unit-price-${product.id}`
                }
              >
                R$
                {' '}
                {product.price.replace(/\./, ',')}

              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-sub-total-${product.id}`
                }
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

SellerOrderDetailsTable.propTypes = {
  productList: PropTypes.array,
}.isRequired;

export default SellerOrderDetailsTable;
