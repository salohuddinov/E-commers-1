//promo cards start

const promoRow = document.querySelector(".promo__row");

const promoProducts = [
  {
    name: "Г/Ц Блинчики с мясом вес, Россия",
    price: "50,50₽",
    disPrice: "44,50₽",
    img: "../assets/images/card-1.svg",
  },
  {
    name: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    price: "50,50₽",
    disPrice: "44,50₽",
    img: "../assets/images/card-2.svg",
  },
  {
    name: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    price: "50,50₽",
    disPrice: "44,50₽",
    img: "../assets/images/card-3.svg",
  },
  {
    name: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    price: "50,50₽",
    disPrice: "44,50₽",
    img: "../assets/images/card-4.svg",
  },
];

function getPromoCard({ name, price, img, disPrice }) {
  const promoCard = document.createElement("div");
  promoCard.className = "promo__card";
  const promoCardImg = document.createElement("img");
  promoCardImg.className = "promo__card-img";
  promoCardImg.src = img;
  const promoCardBottom = document.createElement("div");
  promoCardBottom.className = "promo__card-bottom";
  const promoPrice = document.createElement("div");
  promoPrice.className = "promo__price";
  const promoPriceH3 = document.createElement("h3");
  const promoPriceH4 = document.createElement("h4");
  const promoTitle = document.createElement("div");
  promoTitle.className = "promo__title";
  const promoTitleH4 = document.createElement("h4");
  const promoTitleH41 = document.createElement("h4");
  const promoCardBottomP = document.createElement("p");
  const promoCardBottomRating = document.createElement("img");
  promoCardBottomRating.src = "../assets/images/rating.svg";
  const promoCardBottomBtn = document.createElement("button");
  const promoCardBottomBtnA = document.createElement("a");
  promoCardBottomBtnA.href = "../pages/korzina.html";
  const promoCardLove = document.createElement("img");
  promoCardLove.className = "promo__card-love";
  promoCardLove.src = "../assets/images/love.svg";
  const promoDiscount = document.createElement("div");
  promoDiscount.className = "promo__card-50";
  const promoDiscountH4 = document.createElement("h4");

  const promoPriceH3Text = document.createTextNode(disPrice);
  const promoPriceH4Text = document.createTextNode(price);
  const promoTitleH4Text = document.createTextNode("С картой");
  const promoTitleH41Text = document.createTextNode("Обычная");
  const promoCardBottomPText = document.createTextNode(name);
  const promoCardBottomBtnAText = document.createTextNode("В корзину");
  const promoDiscountH4Text = document.createTextNode("-50%");

  promoPriceH3.appendChild(promoPriceH3Text);
  promoPriceH4.appendChild(promoPriceH4Text);
  promoTitleH4.appendChild(promoTitleH4Text);
  promoTitleH41.appendChild(promoTitleH41Text);
  promoCardBottomP.appendChild(promoCardBottomPText);
  promoCardBottomBtnA.appendChild(promoCardBottomBtnAText);
  promoDiscountH4.appendChild(promoDiscountH4Text);

  promoPrice.append(promoPriceH3, promoPriceH4);
  promoTitle.append(promoTitleH4, promoTitleH41);
  promoCardBottomBtn.appendChild(promoCardBottomBtnA);
  promoDiscount.appendChild(promoDiscountH4);
  promoCardBottom.append(
    promoPrice,
    promoTitle,
    promoCardBottomP,
    promoCardBottomRating,
    promoCardLove,
    promoDiscount,
    promoCardBottomBtn
  );
  promoCard.append(promoCardImg, promoCardBottom);

  promoRow.append(promoCard);

  return promoCard;
}

promoProducts.forEach((el) => {
  promoRow.append(getPromoCard(el));
});
