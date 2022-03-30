export default function StoreCartInLocal(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
