const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Review = require("../models/Review");

const Product = sequelize.define("Product", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.TEXT,
  },
  published: {
    type: DataTypes.BOOLEAN,
  },
});

Product.hasMany(Review, { foreignKey: "product_id" });

module.exports = Product;
