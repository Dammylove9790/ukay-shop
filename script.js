

// let cart_item_plus = document.getElementById('cart_item_plus');
// let cart_item_minus = document.getElementById('cart_item_minus');
// let cart_item_minus = document.getElementById('cart_item_minus');
let cart_items1 = document.getElementById('cart_items1'),
    cart_items2 = document.getElementById('cart_items2'),
    swiper_wrapper = document.getElementsByClassName('swiper-wrapper')[0]

const cart_array = 
[
  {"name": "Wrist Watch", "image": "1", "price": "1200"},
  {"name": "Pen Drive", "image": "2", "price": "5400"},
  {"name": "Andriod", "image": "3", "price": "4100"},
  {"name": "T-Shirt", "image": "4", "price": "600"},
  {"name": "Adidas", "image": "5", "price": "7050"},
  {"name": "Canvas", "image": "6", "price": "1450"},
  {"name": "Clipper", "image": "7", "price": "2800"},
  {"name": "Iron", "image": "8", "price": "420"},
  {"name": "Hand Bag", "image": "9", "price": "590"},
  {"name": "Samsung", "image": "10", "price": "10000"},
  {"name": "Blender", "image": "11", "price": "7180"},
  {"name": "Plasma TV", "image": "12", "price": "1020"},
  {"name": "Earpod", "image": "13", "price": "3700"},
  {"name": "Powerbank", "image": "14", "price": "2500"},
  {"name": "Iron", "image": "8", "price": "420"},
]

let product_items1 = [];
for (let i = 0; i < cart_array.length; i++) {
  product_items1 += `
  <div class="col-lg-3 col-md-4 col-sm-6">
    <div class="card mx-lg-3 mx-md-2 mx-2 my-4">
      <div class="card-header">
        ${cart_array[i].name}
      </div>
      <img class="card-img-top" src="image/${cart_array[i].image}.jpg" alt="${cart_array[i].name}">
      <div class="card-body row text-center justify-content-center">
          <h5 class="card-title">#${cart_array[i].price}</h5>
      </div>
      <div class="btn btn-primary" onclick="add_to_cart(this)">Add to Cart</div>
    </div>
  </div>`
}
cart_items1.innerHTML = product_items1;


let slide_items = "";
for (let i = 0; i < 6; i++) {
  slide_items += `
  <div class="main-card swiper-slide">
    <img class="card-img-top" src="image/${cart_array[i].image}.jpg" alt="${cart_array[i].name}">
    <span class="hot-sale">Hot-Sale</span>
    <div class="card-body">
      <div class="nameAndPrice">
        <h3 class="card-title ">${cart_array[i].name}</h3>
        <span class="card-price">$${cart_array[i].price}</span>
      </div>
      <p class="card-text">Ukay is your number one online shopping site in Nigeria. We are an online store where you can purchase all your electronics</p>
    </div>
  </div>`
}
swiper_wrapper.innerHTML = slide_items;



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  centerSlide: true,
  fade: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

