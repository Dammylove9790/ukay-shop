

// let cart_item_plus = document.getElementById('cart_item_plus');
// let cart_item_minus = document.getElementById('cart_item_minus');
// let cart_item_minus = document.getElementById('cart_item_minus');
let cart_items = document.getElementById('cart_items');

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
]

let product_items = "";
let j = 1;
for (let i = 0; i < cart_array.length; i++) {
  product_items += `<div class="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div class="card mx-lg-3 mx-md-2 mx-2 my-4">
                        <div class="card-header">
                          ${cart_array[i].name}
                        </div>
                        <img class="card-img-top" src="image/${j}.jpg" alt="image/${j}.jpg">
                        <div class="card-body row text-center justify-content-center">
                            <h5 class="card-title">#${cart_array[i].price}</h5>
                        </div>
                        <div class="btn btn-primary" onclick="add_to_cart (this)">Add to Cart</div>
                      </div>
                    </div>`
                  j++;
}
cart_items.innerHTML = product_items;



