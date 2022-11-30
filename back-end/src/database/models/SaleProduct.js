const SaleProductModel = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('sales_products', {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  {
    underscored: true,
    timestamps: false,
    tableName: 'sales_products'
  });

  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product,
      { 
        as: 'products',
        through: SaleProduct,
        foreignKey: 'saleId',
        otherKey: 'productId',
      }
    );
    models.Product.belongsToMany(models.Sale,
      {
        as: 'sales',
        through: SaleProduct,
        foreignKey: 'productId',
        otherKey: 'saleId',
      }
    );
  };

  return SaleProduct;
};

module.exports = SaleProductModel;
