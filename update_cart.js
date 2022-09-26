
// ************ SHOW THE NUMBER OF PRODUCTS IN MY CART ************//
let products_in_cart = document.getElementById('products_in_cart');
products_in_cart.innerHTML = localStorage.length;


// ************ ADD ITEMS TO CART ************ //
function add_to_cart(add_item){
  let product_name = add_item.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML.trim();
  let product_image = add_item.previousElementSibling.previousElementSibling.alt;
  let product_price = add_item.previousElementSibling.firstElementChild.innerHTML.trim().slice(1);

  // if (localStorage.key.include()) {
    
  // } else {
    
  // }  
  const product_info = JSON.stringify({"product_name": product_name, "product_image": product_image, "product_price": product_price});
  localStorage.setItem(product_name, product_info);
  products_in_cart.innerHTML = localStorage.length;
console.log()
}


// ************ REMOVE ITEMS FROM CART ************ //
function remove_from_cart(remove_item){
  let product_name = remove_item.parentNode.parentNode.firstElementChild.nextElementSibling.innerHTML.trim();

  localStorage.removeItem(product_name);
  // remove_item.parentNode.parentNode.remove();
  window.location.assign('cart.html');
}


function checkout(){
  localStorage.clear()
}

// ************ CHECK AND RESET THE DEFAULT PRODUCTS TO 1 ************ //
// let cart_item_number = document.getElementById('cart_item_number');
// if (cart_item_number.value == "0") {
//   cart_item_number.value = 1;
// }



// ************ SHOW ITEMS IN MY CART ************ //
function increase_product(x){
  let total_amount = document.getElementById('total_amount');

  if(x.innerHTML == "+"){
    x.previousElementSibling.firstElementChild.value = parseInt(x.previousElementSibling.firstElementChild.value) + 1;

    let result = x.parentNode.parentNode.previousElementSibling.innerHTML.slice(1) * x.previousElementSibling.firstElementChild.value;
    x.parentNode.parentNode.nextElementSibling.innerHTML = "#" + result;

    total_amount.innerHTML = "#" + (parseInt(total_amount.innerHTML.slice(1)) + parseInt(x.parentNode.parentNode.previousElementSibling.innerHTML.slice(1)));

  }else if(x.innerHTML == "-"){
    x.nextElementSibling.firstElementChild.value = parseInt(x.nextElementSibling.firstElementChild.value) - 1;

    let result = x.parentNode.parentNode.previousElementSibling.innerHTML.slice(1) * x.nextElementSibling.firstElementChild.value;
    x.parentNode.parentNode.nextElementSibling.innerHTML = "#" + result;

    total_amount.innerHTML = "#" + (parseInt(total_amount.innerHTML.slice(1)) - parseInt(x.parentNode.parentNode.previousElementSibling.innerHTML.slice(1)));

  }
}


