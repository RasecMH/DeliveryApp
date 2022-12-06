const { NOW } = require("sequelize");

const SaleModel = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      onDelete: 'CASCADE'
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE'
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE'
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
    Sale.belongsTo(models.User,
      {foreignKey: 'userId', as: 'users', onDelete: 'CASCADE'}
      );
    Sale.belongsTo(models.User,
      {foreignKey: 'sellerId', as: 'seller', onDelete: 'CASCADE'}
        )
  };

  return Sale;
};

module.exports = SaleModel;