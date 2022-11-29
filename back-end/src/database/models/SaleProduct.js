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
    SaleProduct.hasMany(models.User,
      {foreignKey: 'saleId', as: 'sales'}
    );
    SaleProduct.hasMany(models.User,
      {foreignKey: 'productId', as: 'products'}
    );
  };

  return SaleProduct;
};

module.exports = SaleProductModel;
