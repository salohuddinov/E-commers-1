const cartQuantity = document.querySelector(".cart-quantity");

let cartJson = localStorage.getItem("cart");

let cartProducts = JSON.parse(cartJson) || [];

function getCartQuantity() {
  cartQuantity.textContent = cartProducts.length;
}

getCartQuantity();

function increaseQuantity(id) {
  cartProducts = cartProducts.map((pr) => {
    if (pr.id === id) {
      pr.quantity++;
    }
    return pr;
  });
  getProducts();
  localStorage.setItem("cart", JSON.stringify(cartProducts));
}

function decreaseQuantity(id) {
  let productInCart = cartProducts.find((pr) => pr.id === id);
  if (productInCart.quantity === 1) {
    cartProducts = cartProducts.filter((pr) => pr.id !== id);
  } else {
    cartProducts = cartProducts.map((pr) => {
      if (pr.id === id) {
        pr.quantity--;
      }
      return pr;
    });
  }
  getProducts();
  getCartQuantity();
  localStorage.setItem("cart", JSON.stringify(cartProducts));
}
