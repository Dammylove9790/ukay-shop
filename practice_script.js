

let cart_items = document.getElementById('cart_items');
let input_value = document.querySelector('input');

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


function clicking (click_me) {
  // let prev = previousSibling;
  let num1 = click_me.previousSibling.previousSibling.previousSibling.value;
  let num2 = click_me.previousSibling.previousSibling.value;
  let num3 = click_me.previousSibling.value;
  
  localStorage.setItem("person name1",num1);
  localStorage.setItem("person name2",num2);
  localStorage.setItem("person name3",num3);
  // localStorage.setItem("person name",num1);
  // localStorage.removeItem("person name")
  console.log(num1, num2, num3);

}


