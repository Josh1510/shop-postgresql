const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

// User Queries
app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);

// Product Queries
app.get('/product', db.getProduct);
app.get('/product/byid/:id', db.getProductById);
app.post('/product', db.createProduct);
app.put('/product/byid/:id', db.updateProduct);
app.delete('/product/byid/:id', db.deleteProduct);

// Unique product types
app.get('/product/brand/', db.getListOfProductBrands);
app.get('/product/category/', db.getListOfProductCategories);

// Product Queries by type
app.get('/product/brand/:id', db.getProductByBrand);
app.get('/product/category/:id', db.getProductByCategory);

// Product matching category and brand
app.get('/search/:category/:brand', db.getProductMatchingCategoryAndBrand);
app.get('/search/:category', db.getBrandsMatchingCategory);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
