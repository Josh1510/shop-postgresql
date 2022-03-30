import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import centsToDollars from '../../../functions/centsToDollars';
import placeholderimg from '../../../images/placeholder.jpg';
export default function Cart({ modal, setCartModalOpen }) {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cart'))
  );
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let totalItems = totalPrice;
    cartItems.forEach((item) => {
      console.log(item);

      totalItems += item.quantity * item.product_price;
    });
    setTotalPrice(totalItems);
  }, [cartItems]);

  return (
    <CartContainer modal={modal}>
      <CartContent>
        {cartItems.map((item) => (
          <ItemContainer key={item.product_id}>
            <ImageContainer
              src={placeholderimg}
              alt="image description placeholder"
            />
            <ItemDetails>
              <div>
                <ProductName>{item.product_name}</ProductName>
                <div>{item.product_highlights}</div>
              </div>
              <ProductQuantity>{item.quantity} x</ProductQuantity>
              <ProductPrice>{centsToDollars(item.product_price)}</ProductPrice>
            </ItemDetails>
          </ItemContainer>
        ))}
        <TotalPrice>Total - {centsToDollars(totalPrice)}</TotalPrice>
      </CartContent>
    </CartContainer>
  );
}

const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const CartContent = styled.div`
  max-width: 1120px;
`;

const ImageContainer = styled.img`
  width: 80px;
  height: 80px;
  margin: 15px;
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direciton: row;
`;

const ItemDetails = styled.div`
  margin: 15px;
  display: flex;
  flex-direciton: row;
`;
const ProductName = styled.div`
  font-weight: 500;
`;
const ProductQuantity = styled.div`
  font-weight: 500;
  margin-left: 25px;
`;

const ProductPrice = styled.div`
  font-weight: 500;
  margin-left: 15px;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 15px;
  font-weight: 500;
`;
