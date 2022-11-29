const { NOW } = require("sequelize");

const SaleModel = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deliveryNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    saleDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: NOW,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    underscored: true,
    timestamps: false,
    tableName: 'sales'
  });

  Sale.associate = (models) => {
    Sale.hasMany(models.User,
      {foreignKey: 'userId', as: 'users'}
      );
      Sale.hasMany(models.User,
        {foreignKey: 'sellerId', as: 'users'}
        )
  };

  return Sale;
};

module.exports = SaleModel;