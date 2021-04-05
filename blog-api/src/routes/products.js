const express = require("express");

const router = express.Router();

const productsController = require("../controllers/products");

// CREATE -> POST
router.use("/product", productsController.createProduct);

module.exports = router;
