const Product = require("../models/Product");
const Review = require("../models/Review");

const addReviewByProductId = async (req, res) => {
  const { rating, description } = req.body;
  const product = await Product.findByPk(req.params.id);
  if (product) {
    const review = await Review.create({
      rating,
      description,
      product_id: product.id,
    });
    res.status(200).send(review);
  }
  res.status(404).send("No product found");
};

const getAllReviewsByProductId = async (req, res) => {
  const reviews = await Review.findAll({
    where: { product_id: req.params.id },
  });
  res.status(200).send(reviews);
};

const deleteReviewById = async (req, res) => {
  await Review.destroy({ where: { id: req.params.id } });
  res.status(200).send("Review Deleted");
};

module.exports = {
  addReviewByProductId,
  getAllReviewsByProductId,
  deleteReviewById,
};
