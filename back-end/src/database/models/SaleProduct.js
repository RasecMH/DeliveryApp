const SaleProductModel = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      onDelete: 'CASCADE'
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      onDelete: 'CASCADE'
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
        as: 'saleProducts',
        through: SaleProduct,
        foreignKey: 'saleId',
        otherKey: 'productId',
        onDelete: 'CASCADE'
      }
    );
    models.Product.belongsToMany(models.Sale,
      {
        as: 'sales',
        through: SaleProduct,
        foreignKey: 'productId',
        otherKey: 'saleId',
        onDelete: 'CASCADE'
      }
    );
  };

  return SaleProduct;
};

module.exports = SaleProductModel;
