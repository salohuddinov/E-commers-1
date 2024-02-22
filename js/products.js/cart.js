const cartProductsRow = document.querySelector(".cart-products");

function getCartProductCard({ images, name, id, quantity, description }) {
  return `
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img src=${images[0]} class="img-fluid rounded-start" alt=${name}>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-danger" onclick="decreaseQuantity(${id})">-</button>
              <span type="button" class="btn btn-primary">${quantity}</span>
              <button type="button" class="btn btn-success" onclick="increaseQuantity(${id})">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function getCartProducts() {
  cartProductsRow.innerHTML = "";
  cartProducts.map((pr) => {
    cartProductsRow.innerHTML += getCartProductCard(pr);
  });
}

getCartProducts();

function increaseQuantity(id) {
  cartProducts = cartProducts.map((pr) => {
    if (pr.id === id) {
      pr.quantity++;
    }
    return pr;
  });
  localStorage.setItem("cart", JSON.stringify(cartProducts));
  getCartProducts();
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
  localStorage.setItem("cart", JSON.stringify(cartProducts));
  getCartQuantity();
  getCartProducts();
}
