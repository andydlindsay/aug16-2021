const express = require('express');
const router = express.Router();
const productQueries = require('../db/product-queries');

// GET /products/
router.get('/', (req, res) => {
  productQueries.getProducts()
    .then((products) => {
      // res.render();
      res.json(products);
    });
});

// GET /products/:product_id
router.get('/:product_id', (req, res) => {
  productQueries.getProductById(req.params.product_id)
    .then((product) => {
      res.json(product);
    });
});

module.exports = router;
