import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import useFetch from '../../functions/useFetch';
import BrandList from './BrandList';
import ProductList from './ProductList';
import CategoriesList from './CategoriesList';

export default function Categories() {
  const [productCategory, setProductCategory] = useState('');
  const [brand, setBrand] = useState('');

  return (
    <Router>
      <div>
        <CategoriesList
          productCategory={productCategory}
          setProductCategory={setProductCategory}
          setBrand={setBrand}
          brand={brand}
        />

        <ProductList category={productCategory} brand={brand} />

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const { loading, error, value } = useFetch(
    `http://localhost:5000/product/category`,
    {},
    []
  );
  return (
    <div>
      <h2>Home</h2>
      <div>Loading: {loading.toString()}</div>
      <div>{JSON.stringify(error, null, 2)}</div>
      {/* <div>{JSON.stringify(value, null, 2)}</div> */}
    </div>
  );
}

function About() {
  const { loading, error, value } = useFetch(
    `http://localhost:5000/product/brand`,
    {},
    []
  );
  return (
    <div>
      <h2>Home</h2>

      <div>Loading: {loading.toString()}</div>
      <div>{JSON.stringify(error, null, 2)}</div>
      <div>{JSON.stringify(value, null, 2)}</div>
    </div>
  );
}
function Users() {
  return <h2>Users</h2>;
}
