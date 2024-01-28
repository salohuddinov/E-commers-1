new cards 

const newRow = document.querySelector(".new__row");

const newProducts = [
  {
    name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: "599,99₽",
    img: "../assets/images/card-5.svg",
  },
  {
    name: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    price: "44,50₽",
    img: "../assets/images/card-3.svg",
  },
  {
    name: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    price: "159,99₽",
    img: "../assets/images/card-4.svg",
  },
  {
    name: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    price: "599,99₽",
    img: "../assets/images/card-2.svg",
  },
];

function getNewCard({name, price, img}) {
  const newCard = document.querySelector("div");
  newCard.classList = "new__card";
  const newCardImg = document.createElement("img");
  newCardImg.classList = "new__card-img";
  newCardImg.src = img;
  const newCardBottom = document.createElement("div");
  newCardBottom.classList = "new__card-bottom";
  const newCardH3 = document.createElement("h3");
  const newCardP = document.createElement("p");
  const newCardRating = document.createElement("img");
  const newCardBtn = document.createElement("button");
  const newCardA = document.createElement("a");
  newCardA.href = "../pages/korzina.html";
  const newCardLove = document.createElement("img");

  const newCardH3Text = document.createTextNode(price);
  const newCardPText = document.createTextNode(name);
  const newCardAText = document.createTextNode("В корзину");

  newCardH3.appendChild(newCardH3Text);
  newCardP.appendChild(newCardPText);
  newCardA.appendChild(newCardAText);

  newCardBtn.appendChild(newCardA);

  newCardBottom.append(
    newCardH3,
    newCardP,
    newCardRating,
    newCardBtn,
    newCardLove
  );

  newCard.append(newCardImg, newCardBottom);

  newRow.append(newCard);

  return newCard;
}

newProducts.forEach((el) => {
  newRow.append(getNewCard(el));
});
