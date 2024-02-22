const productsRow = document.querySelector(".products-row");
const searchInput = document.querySelector(".search-input");
const productsQuantity = document.querySelector(".products-quantity");
const pagination = document.querySelector(".pagination");
const priceSortSelect = document.querySelector(".price-sort");

let search = "";

let activePage = +localStorage.getItem(PAGE) || 1;

let priceSort = "initial";

function getProductCard({ id, name, price, description, images }) {
  let productInCart = cartProducts.find((pr) => pr.id === id);
  return `
      <div class="card">
        <img class="new__card-img" src=${images[0]} alt="jskaiha" />
        <div class="new__card-bottom">
          <h2 class="card__h2">${price}</h2>
          <h3 class="card__h3">${name}</h3>
          <p>Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
          <img class="card__star" src="../assets/images/rating.svg" alt="jskaiha" />
      
          ${productInCart
      ? `<div class="btn-group" role="group">
                  <button type="button" class="btn btn-danger" onclick="decreaseQuantity(${id})">-</button>
                  <span type="button" class="btn btn__center">${productInCart.quantity}</span>
                  <button type="button" class="btn btn-success" onclick="increaseQuantity(${id})">+</button>
                </div>`
      : `<button onclick="addToCart(${id})" class="btn ">В корзину</button>`
    }
        </div>
      </div>
    </div >
  `;
}

function getProducts() {
  let results = products.filter((pr) => pr.name.toLowerCase().includes(search));

  let sortResults;

  if (priceSort === "asc") {
    sortResults = results.toSorted((a, b) => a.price - b.price);
  } else if (priceSort === "desc") {
    sortResults = results.toSorted((a, b) => b.price - a.price);
  } else {
    sortResults = results;
  }

  let pages = Math.ceil(results.length / LIMIT);

  if (pages > 1) {
    pagination.innerHTML = `<li class="page-item ${activePage === 1 ? "disabled" : ""
      }">
      <button onclick="getPage('-')" class="page-link"><</button>
    </li>`;

    for (let i = 1; i <= pages; i++) {
      pagination.innerHTML += `<li class="page-item ${i === activePage ? "active" : ""
        }"><button class="page-link" onclick="getPage(${i})">${i}</button></li>`;
    }

    pagination.innerHTML += `<li class="page-item ${activePage === pages ? "disabled" : ""
      }">
      <button onclick="getPage('+')" class="page-link">></button>
    </li>`;
  } else {
    pagination.innerHTML = "";
  }

  productsRow.innerHTML = "";

  productsQuantity.textContent = results.length;

  let start = (activePage - 1) * LIMIT;
  let end = activePage * LIMIT;

  sortResults.slice(start, end).map((product) => {
    productsRow.innerHTML += getProductCard(product);
  });
}

function getPage(page) {
  if (page === "+") {
    activePage++;
  } else if (page === "-") {
    activePage--;
  } else {
    activePage = page;
  }
  localStorage.setItem(PAGE, activePage);
  getProducts();
}

getProducts();

searchInput.addEventListener("keyup", function () {
  search = this.value.trim().toLowerCase();
  activePage = 1;
  localStorage.setItem(PAGE, activePage);
  getProducts();
});

priceSortSelect.addEventListener("change", function () {
  priceSort = this.value;
  getProducts();
});

function addToCart(id) {
  let productFound = products.find((pr) => pr.id === id);
  let productInCart = cartProducts.find((pr) => pr.id === id);

  if (productInCart) {
    cartProducts = cartProducts.map((pr) => {
      if (pr.id === id) {
        pr.quantity++;
      }
      return pr;
    });
  } else {
    productFound.quantity = 1;
    cartProducts.push(productFound);
  }

  getCartQuantity();

  getProducts();

  localStorage.setItem("cart", JSON.stringify(cartProducts));
}

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
