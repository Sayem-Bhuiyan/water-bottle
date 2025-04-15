const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");

  if (storedCartString) {
    return JSON.parse(storedCartString);
  }

  return [];
};

const addToLS = (item) => {
  const cart = getStoredCart();
  cart.push(item);

  // Saved to LocalStorage
  const stringifiedCart = JSON.stringify(cart);
  localStorage.setItem("cart", stringifiedCart);
};

export { addToLS, getStoredCart };
