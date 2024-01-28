const productsRow = document.querySelector(".products-row");
const searchInput = document.querySelector(".search-input");
const productsQuantity = document.querySelector(".products-quantity");
const pagination = document.querySelector(".pagination");
const priceSortSelect = document.querySelector(".price-sort");

let search = "";

let activePage = 1;

let priceSort = "initial";

function getProductCard({ name, price, description, images }) {
  return `
   <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
    <div class="card">
            <img class="new__card-img" src=${images[0]} alt="jskaiha" />
            <div class="new__card-bottom">
              <h3 class="card__h3">${name}</h3>
              <p>Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
              <img class="card__star" src="../assets/images/rating.svg" alt="jskaiha" />
              <button class ="card__btn"><a class="btn__a" href="../pages/korzina.html">В корзину</a></button>
            </div>
          </div>
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
  getProducts();
}

getProducts();

searchInput.addEventListener("keyup", function () {
  search = this.value.trim().toLowerCase();
  activePage = 1;
  getProducts();
});

priceSortSelect.addEventListener("change", function () {
  priceSort = this.value;
  getProducts();
});
