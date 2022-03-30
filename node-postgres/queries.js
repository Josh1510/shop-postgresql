const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.REACT_APP_DB_USER,
  host: process.env.REACT_APP_DB_HOST,
  database: process.env.REACT_APP_DB_NAME,
  password: process.env.REACT_APP_DB_PASSWORD,
  port: process.env.REACT_APP_DB_PORT,
});

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createUser = (request, response) => {
  const {
    first_name,
    last_name,
    email_address,
    phone_number,
    address_street,
    address_city,
    address_state,
    address_country,
    address_postcode,
  } = request.body;

  pool.query(
    'INSERT INTO users (first_name, last_name, email_address, phone_number, address_street, address_city, address_state, address_country, address_postcode) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
    [
      first_name,
      last_name,
      email_address,
      phone_number,
      address_street,
      address_city,
      address_state,
      address_country,
      address_postcode,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${result.insertId}`);
    }
  );
};

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const {
    first_name,
    last_name,
    email_address,
    phone_number,
    address_street,
    address_city,
    address_state,
    address_country,
    address_postcode,
  } = request.body;

  pool.query(
    'UPDATE users SET first_name = $1, last_name = $2, email_address = $3, phone_number = $4, address_street = $5, address_city = $6, address_state = $7, address_country =$8, address_postcode = $9 WHERE id = $10',
    [
      first_name,
      last_name,
      email_address,
      phone_number,
      address_street,
      address_city,
      address_state,
      address_country,
      address_postcode,
      id,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

const getProduct = (request, response) => {
  pool.query(
    'SELECT * FROM products ORDER BY product_id ASC',
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getProductById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    'SELECT * FROM products WHERE product_id = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createProduct = (request, response) => {
  const {
    product_name,
    product_category,
    product_price,
    product_highlights,
    product_brand,
  } = request.body;

  pool.query(
    'INSERT INTO products (product_name, product_category, product_price, product_highlights, product_brand) VALUES ($1, $2, $3, $4, $5)',
    [
      product_name,
      product_category,
      product_price,
      product_highlights,
      product_brand,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Product added with ID: ${result.insertId}`);
    }
  );
};

const updateProduct = (request, response) => {
  const id = parseInt(request.params.id);
  const {
    product_name,
    product_category,
    product_price,
    product_highlights,
    product_brand,
  } = request.body;

  pool.query(
    'UPDATE users SET product_name = $1, product_category = $2, product_price = $3, product_highlights = $4, product_brand = $5 WHERE product_id = $6',
    [
      product_name,
      product_category,
      product_price,
      product_highlights,
      product_brand,
      id,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Product modified with ID: ${id}`);
    }
  );
};

const deleteProduct = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    'DELETE FROM product WHERE product_id = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`product deleted with ID: ${id}`);
    }
  );
};

const getListOfProductBrands = (request, response) => {
  pool.query(
    'SELECT DISTINCT product_brand FROM products',
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getListOfProductCategories = (request, response) => {
  pool.query(
    'SELECT DISTINCT product_category FROM products',
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getBrandsMatchingCategory = (request, response) => {
  const category = request.params.category;

  pool.query(
    `SELECT DISTINCT product_brand FROM products WHERE product_category = $1;`,
    [category],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getProductMatchingCategoryAndBrand = (request, response) => {
  const category = request.params.category;
  const brand = request.params.brand;

  pool.query(
    `SELECT * FROM products WHERE product_category = $1  AND product_brand = $2;`,
    [category, brand],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getProductByBrand = (request, response) => {
  const id = request.params.id;

  pool.query(
    'SELECT * FROM products WHERE product_brand = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getProductByCategory = (request, response) => {
  const id = request.params.id;

  pool.query(
    'SELECT * FROM products WHERE product_category = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getListOfProductBrands,
  getListOfProductCategories,
  getBrandsMatchingCategory,
  getProductMatchingCategoryAndBrand,
  getProductByBrand,
  getProductByCategory,
};
