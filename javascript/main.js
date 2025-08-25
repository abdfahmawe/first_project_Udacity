let product = {
  id: 1,
  title: "Loveseat Sofa",
  newprice: 109.95,
  previousPrice: 200.0,
  img: "/images/Product/Item/Loveseat Sofa.png",
  Category: "Living Room",
};
let product2 = {
  id: 2,
  title: "White Drawer unit",
  newprice: 109.95,
  previousPrice: 200.0,
  img: "/images/Product/Item/WhiteDrawerunit.png",
  Category: "Bedroom",
};
let product3 = {
  id: 3,
  title: "Luxury Sofa",
  newprice: 109.95,
  previousPrice: 200.0,
  img: "/images/Product/Item/Luxury Sofa.png",
  Category: "Living Room",
};
let product4 = {
  id: 4,
  title: "Table Lamp",
  newprice: 109.95,
  previousPrice: 200.0,
  img: "/images/Product/Item/Table Lamp.png",
  Category: "Living Room",
};
let product5 = {
  id: 5,
  title: "Black Tray table",
  newprice: 109.95,
  previousPrice: 200.0,
  img: "/images/Product/Item/Black Tray table.png",
  Category: "Bedroom",
};
let product6 = {
  id: 6,
  title: "Bamboo Basket",
  newprice: 109.95,
  previousPrice: 200.0,
  img: "/images/Product/Item/Bamboo Basket.png",
  Category: "Kitchen",
};
let products = [product, product2, product3, product4, product5, product6];

function displayProduct(category) {
  let filterdProducts = products;
  if (category !== "All Rooms") {
    filterdProducts = products.filter((item) => item.Category === category);
  }
  let data = ``;
  for (let i = 0; i < filterdProducts.length; i++) {
    data += `  <div class="product"> 
                      <div class="img">
                  <img
                    src="${filterdProducts[i].img}"
                    alt=""
                  />
                  <div class="img-info">
                    <span class="white">NEW</span>
                    <span class="discount">-50%</span>
                  </div>
                </div>
                <div class="product-info">
                  <h4>${filterdProducts[i].title}</h4>
                  <div class="price">
                    <span class="after">${filterdProducts[i].newprice}</span>
                    <span class="before">${filterdProducts[i].previousPrice}</span>
                  </div>
                </div>
                </div>
    `;
  }
  document.querySelector(".category .Product-list").innerHTML = data;
}
window.onload = displayProduct("All Rooms");

document.querySelectorAll(".types button").forEach((button) => {
  button.addEventListener("click", function () {
    document
      .querySelectorAll(".types button")
      .forEach((btn) => btn.classList.remove("selected"));
    this.classList.add("selected");

    let category = this.innerText;
    displayProduct(category);
  });
});
