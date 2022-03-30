import React, { useState, useEffect } from 'react';
import StoreCartInLocal from './StoreCartInLocal';

// adds the item to the local storage cart
export default function CartStore(item, quantity) {
  // add quantity to item in storage
  item = { ...item, quantity };

  // sets cart to an empty array if there is no local storage, otherwise cart is set
  // to local storage
  let currentCart =
    localStorage.getItem('cart') !== null
      ? JSON.parse(localStorage.getItem('cart'))
      : [];

  // checks if item is already in the cart, increases quantity if it is, adds it if not
  let index = currentCart.findIndex((x) => x.product_id === item.product_id);
  if (index >= 0) {
    currentCart[index].quantity += 1;
  } else if (item.product_id > 0) {
    currentCart.push(item);
  }

  // store cart in local storage
  StoreCartInLocal(currentCart);

  return <div>{console.log(`Item added to cart!`)}</div>;
}
