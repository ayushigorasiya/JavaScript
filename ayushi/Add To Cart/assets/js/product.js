let product = [
  {
    id: 1,
    img: "assets/img/1.jpg",
    name: "FITTED TOP WITH RHINESTONE BOW",
    highlights: "JACKET TYPE",
    price: 3550.00,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 2,
    img: "assets/img/2.jpg",
    name: "LACE-TRIMMED SEQUIN TOP WITH DIMOND",
    highlights: "FOR All COLOR TYPES",
    price: 2800.00,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 3,
    img: "assets/img/3.jpg",
    name: "ZW COLLECTION DRAPED TOP",
    highlights: "BLACK COLOR",
    price: 3550.00,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 4,
    img: "assets/img/4.jpg",
    name: "ASYMMETRIC RIBBED TOP WITH RHINESTONES",
    highlights: "WITH DIMOND DESIGN",
    price: 1950.00,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 5,
    img: "assets/img/5.jpg",
    name: "FREELED JACQUARD TOP",
    highlights: "SMALL ARE AVAILABLE",
    price: 2950.00,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 6,
    img: "assets/img/6.jpg",
    name: "JACQUARD POLO TOP ",
    highlights: "AMEGING COLOR",
    price: 2550,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 7,
    img: "assets/img/7.jpg",
    name: "STRETCH BELTED TOP",
    highlights: "COTTON WITH SLEEV LESS TOP",
    price: 2550.00,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 8,
    img: "assets/img/8.jpg",
    name: "DRAPED HALTER TOP",
    highlights: " SLEEV LESS COMBINATION",
    price: 2150.00,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 9,
    img: "assets/img/9.jpg",
    name: "ZEBRA BLEND TOP ",
    highlights: "SLEEV LESS TOP",
    price: 1450.00,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 10,
    img: "assets/img/10.jpg",
    name: "POLYAMIDE TOP WITH BOW",
    highlights: "SLIVE LESS TOP",
    price: 1800.00,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 11,
    img: "assets/img/11.jpg",
    name: "POLYAMIDE TOP WITH TRIMS",
    highlights: "SLIVE LESS TOP",
    price: 1750.00,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 12,
    img: "assets/img/12.jpg",
    name: "SHIMMERY HALTER TOP",
    highlights: "SHORT TOP",
    price: 1550.00,
    qty: 1,
    pic: "assets/img/12.png",
  },
];

function viewProducts() {
  let tbl = "";
  product.map((val) => {
    tbl += `
       <div class = "col-3 ">
            <div class="card mb-4">
               <div class = "imgs m-3"><img src="${val.img}" class="card-img-top" style="width: 100%; height: 300px;"></div>
               <div class="card-body">
                    <h3 class="card-title">${val.name}</h3>
                    <p class="card-text mb-2">${val.highlights}</p>
                    <p class="card-text mb-2">RS.${val.price}</p>
                    <a onclick = "addToCart(${val.id})" class="btn btn-primary">Buy Now</a>
                </div>
            </div>
        </div> 
    `;
  });
  document.getElementById("product").innerHTML = tbl;
}
viewProducts();

let cart = [];
function addToCart(id) {
  let allcart = JSON.parse(localStorage.getItem("cart")) || [];
  let found = false;

  for (let i = 0; i < allcart.length; i++) {
    if (allcart[i].id == id) {
      allcart[i].qty++;
      found = true;
      break;
    }
  }
  if (!found) {
    let productToAdd = product.find((item) => item.id === id);
    if (productToAdd) {
      productToAdd.qty = 1;
      allcart.push(productToAdd);
    } else {
      console.error("Product not available!");
      return;
    }
  }
  localStorage.setItem("cart", JSON.stringify(allcart));
  alert("Added to Cart");
}
