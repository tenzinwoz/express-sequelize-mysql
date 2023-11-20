const productController = require("../controllers/productController");
const router = require("express").Router();

router.post("/", productController.addProduct);
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.put("/:id", productController.updateProductById);
router.delete("/:id", productController.deleteProductById);
module.exports = router;
