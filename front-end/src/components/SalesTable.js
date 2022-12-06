import React from 'react';
import { useLocalStorage } from 'react-use';

function SalesTable() {
  const [value, setValue] = useLocalStorage('cartItems', []);

  const removeItemFromLocalStorage = (id) => {
    const hasItem = value.findIndex((item) => item.id === id);
    if (hasItem >= 0) {
      value.splice(hasItem, 1);
      return setValue([...value]);
    }
  };

  return (
    <div>
      <p>Finalizar Pedido</p>
      <table>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
        {
          value.map((item, i) => (
            <tr key={ item.id }>
              <td
                data-testid={ `customer_checkout__element-order-table-item-number-${i}` }
              >
                {i + 1}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${i}` }
              >
                {item.name}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
              >
                {item.quantity}

              </td>
              <td>
                R$
                {' '}
                <span
                  data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }
                >
                  {item.price.replace(/\./, ',')}

                </span>
              </td>
              <td>
                R$
                {' '}
                <span
                  data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
                >
                  {(item.price * item.quantity).toFixed(2).replace(/\./, ',')}

                </span>
              </td>
              <td>
                <button
                  onClick={ () => removeItemFromLocalStorage(item.id) }
                  data-testid={ `customer_checkout__element-order-table-remove-${i}` }
                  type="button"
                >
                  Remover

                </button>
              </td>
            </tr>
          ))
        }
      </table>
      <p>
        TOTAL DO PEDIDO R$
        {' '}
        <span data-testid="customer_checkout__element-order-total-price">
          {value.reduce((acc, c) => c.price * c.quantity + acc, 0).toFixed(2).replace(/\./, ',')}
        </span>
      </p>
    </div>
  );
}

export default SalesTable;
