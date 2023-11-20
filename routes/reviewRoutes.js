const reviewController = require("../controllers/reviewController");
const router = require("express").Router();

router.post("/:id", reviewController.addReviewByProductId);
router.get("/:id", reviewController.getAllReviewsByProductId);
router.delete("/:id", reviewController.deleteReviewById);

module.exports = router;
