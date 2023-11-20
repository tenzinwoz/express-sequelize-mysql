const Product = require("../models/Product");

const addProduct = async (req, res) => {
  const { title, price, description, published } = req.body;
  const product = await Product.create({
    title,
    price,
    description,
    published,
  });
  res.status(200).send(product);
};

const getAllProducts = async (req, res) => {
  const isPublished = req.query.published;
  const products = isPublished
    ? await Product.findAll({ where: { published: isPublished } })
    : await Product.findAll({});

  res.status(200).send(products);
};

const getProductById = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  res.status(200).send(product);
};

const updateProductById = async (req, res) => {
  const id = req.params.id;
  const product = await Product.update(req.body, { where: { id } });
  res.status(200).send(product);
};

const deleteProductById = async (req, res) => {
  const id = req.params.id;
  const product = await Product.destroy({ where: { id } });
  res.status(200).send(`Product is Deleted`);
};

const getPublishedProducts = async (req, res) => {
  const products = await Product.findAll({ where: { published: true } });
  res.status(200).send(products);
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  getPublishedProducts,
};
