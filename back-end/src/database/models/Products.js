const ProductModel = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    price: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    urlImage: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  },
  {
    underscored: true,
    timestamps: false,
    tableName: 'products'
  });

  return Product;
};

module.exports = ProductModel;
