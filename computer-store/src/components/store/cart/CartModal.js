import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import centsToDollars from '../../../functions/centsToDollars';
import placeholderimg from '../../../images/placeholder.jpg';
export default function CartModal({ modal, setCartModalOpen }) {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')));
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let totalItems = totalPrice;
    cartItems.forEach((item) => {
      console.log(item);

      totalItems += item.quantity * item.product_price;
    });
    setTotalPrice(totalItems);
  }, [cartItems]);

  const closeModal = (e) => {
    setCartModalOpen(false);
  };

  return (
    <CartContainer modal={modal}>
      <ModalClose onClick={closeModal} />
      <CartContent>
        <CartBanner>
          <span>your cart</span>
          <CloseCart onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16.25" height="16.25" viewBox="0 0 16.25 16.25" aria-hidden="true">
              <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                <path d="M1.061 15.203L15.203 1.061M1.06 1.06l14.142 14.142"></path>
              </g>
            </svg>
          </CloseCart>
        </CartBanner>
        <ItemsContainer>
          {cartItems.map((item) => (
            <ItemContainer key={item.product_id}>
              <ImageContainer src={placeholderimg} alt="image description placeholder" />
              <ItemDetails>
                <ProductPrice>{centsToDollars(item.product_price)}</ProductPrice>
                <ProductName>
                  <span>{item.product_name}</span>
                </ProductName>
                <PriceContainer>
                  <ProductQuantity>{item.quantity}</ProductQuantity>
                  <span> x </span>
                  <ProductPrice>{centsToDollars(item.product_price)}</ProductPrice>
                </PriceContainer>
              </ItemDetails>
            </ItemContainer>
          ))}
        </ItemsContainer>

        <CheckoutContainer>
          <HorizRow />
          <TotalPrice>Total: {centsToDollars(totalPrice)}</TotalPrice>
          <BtnContainer>
            <CheckoutBtn>Proceed To Checkout</CheckoutBtn>
            <ViewCartBtn>View Cart</ViewCartBtn>
          </BtnContainer>
        </CheckoutContainer>
      </CartContent>
    </CartContainer>
  );
}

const CartContainer = styled.div`
  display: ${({ modal }) => (modal ? 'block' : 'none')};
  z-index: 1;
  position: fixed;
  display: flex;
  // display: grid;
  // grid-template-rows: auto 1fr auto;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  color: #c5c6c7;
`;

const ModalClose = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
`;

const CartContent = styled.div`
  min-width: 425px;
  height: 100%;
  background-color: #0b0c10;
`;

const CloseCart = styled.span`
  max-width: 30px;
  color: #c5c6c7;
  z-index: 99;
  padding: 0px 10px;
  position: relative;
  right: 0px;
  cursor: pointer;
  &:hover {
    opacity: 50%;
  }
`;

const CartBanner = styled.div`
  z-index: 2;
  width: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1f2833;

  span {
    font-size: 1.6rem;
    color: #c5c6c7;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    flex-grow: 1;
    width: 425px;
    position: absolute;
  }
`;

const ItemsContainer = styled.div`
  overflow: hidden;
`;

const ImageContainer = styled.img`
  width: 60px;
  height: 60px;
  margin: 15px;
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direciton: row;
`;

const ItemDetails = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ProductName = styled.div`
  font-weight: 300;

  white-space: nowrap;
  overflow: hidden;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  span {
    padding: 0px 10px;
  }
`;

const ProductQuantity = styled.div`
  font-weight: 500;
  white-space: nowrap;
  padding-left: 25px;
`;

const ProductPrice = styled.div`
  font-weight: 500;
`;

const CheckoutContainer = styled.div`
  margin: 0px 20px;
  min-height: 225px;
  div {
    width: 100%;
    padding: 15px 0px;
  }
`;

const HorizRow = styled.hr`
  margin: 10px 0px;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: x-large;
  font-weight: 500;
`;

const BtnContainer = styled.div`
  div {
    font-weight: 500;
    border: 1px solid #c5c6c7;
    cursor: pointer;
  }
`;
const CheckoutBtn = styled.div`
  background-color: #45a29e;
  color: #0b0c10;
  &:hover {
    background-color: #66fcf1;
  }
`;
const ViewCartBtn = styled.div`
  margin-top: 10px;
  &:hover {
    background-color: #45a29e;
    color: #0b0c10;
  }
`;
