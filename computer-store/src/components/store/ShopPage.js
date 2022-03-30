import React, { useState } from 'react';
import styled from 'styled-components';

import ProductList from './ProductList';
import CategoriesList from './CategoriesList';
import Cart from './cart/Cart';

export default function ShopPage() {
  const [productCategory, setProductCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [cartItems, setCartItems] = useState([]);

  return (
    <ShopContainer>
      <CategoriesContainer>
        <CategoriesList
          productCategory={productCategory}
          setProductCategory={setProductCategory}
          setBrand={setBrand}
          brand={brand}
        />
      </CategoriesContainer>
      <ProductsContainer>
        <ProductList
          category={productCategory}
          brand={brand}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </ProductsContainer>
    </ShopContainer>
  );
}

const ShopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CategoriesContainer = styled.div`
  padding: 10px 30px;
  min-width: 180px;
  max-width: 180px;
`;
const ProductsContainer = styled.div`
  max-width: 1120px;
`;
