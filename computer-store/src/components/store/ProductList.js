import React, { useEffect } from 'react';
import useFetch from '../../functions/useFetch';
import styled from 'styled-components';
import placeholderimg from '../../images/placeholder.jpg';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import CartStore from './cart/CartStore';
import centsToDollars from '../../functions/centsToDollars';

import { SkeletonLoading } from '../../functions/SkeletonLoading';

export default function ProductList({
  category,
  brand,
  cartItems,
  setCartItems,
}) {
  let { loading, error, value } = useFetch(
    (brand === '') & (category === '')
      ? `http://localhost:5000/product`
      : (brand === '') & (category !== '')
      ? `http://localhost:5000/product/category/${category}`
      : `http://localhost:5000/search/${category}/${brand}`,

    {},
    [category, brand]
  );

  const productItems = [];

  for (const property in value) {
    productItems.push(value[property]);
  }

  return (
    <ContentContainer key={brand} id={brand}>
      {productItems.map((product) => (
        <ProductContainer key={product.product_id}>
          <ProductName>{product.product_name}</ProductName>

          <ProductHighlights>
            {product.product_highlights.split(', ').map((highlight) => (
              <Highlight>{highlight}</Highlight>
            ))}
          </ProductHighlights>
          <PushDown />
          <CartPriceContainer>
            <IconContainer
              onClick={() => {
                CartStore(product, 1);
              }}
            >
              <CartButton />
            </IconContainer>
            <ProductPrice>{centsToDollars(product.product_price)}</ProductPrice>
          </CartPriceContainer>
        </ProductContainer>
      ))}
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProductContainer = styled.div`
  background-image: url(${placeholderimg});
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

const ProductName = styled.div`
  color: #c5c6c7;
  height: auto;
  padding: 10px;
  background-color: #1f2833;
  font-weight: 500;
`;

const PushDown = styled.div`
  flex-grow: 1;
`;

const CartButton = styled(AddShoppingCartOutlinedIcon)``;

const IconContainer = styled(IconButton)`
  //target cart button color on hover of outer container
  &:nth-child(1) {
    color: #0b0c10;
    &:hover {
      color: #66fcf1;
      background-color: #1f2833;
    }
  }
`;

const CartPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

const ProductPrice = styled.div`
  color: #66fcf1;
  font-weight: 500;
  background-color: #1f2833;
  padding: 0px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductHighlights = styled.div`
  color: #c5c6c7;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px 5px;
  margin-top: 5px;
`;

const Highlight = styled.div`
  padding: 5px;
  background-color: #1f2833;
  font-size: small;
`;

// const AddToCart = styled.input`ss`;
