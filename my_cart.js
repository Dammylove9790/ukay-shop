


// ************ SHOW ITEMS IN MY CART ************//
if (localStorage.length > 0) {
  let cart_items_table = document.getElementById('cart_items_table');
  let product_table = `
  <table class="table table-striped border mb-5">
  <thead class="bg-danger text-white">
    <tr>
      <th>s/n</th>
      <th>name</th>
      <th>image</th>
      <th>price</th>
      <th>quantity</th>
      <th>amout</th>
      <th>action</th>
    </tr>
  </thead>
  <tbody id="cart_table_body">
  `;

  let product_amount = document.getElementById('product_amount');
  let product_total_amount = document.getElementById('product_total_amount');
  let cart_item_number = document.getElementById('cart_item_number');

    let total_amount = [];

    let j = 1;
    for (let i = 0; i < localStorage.length; i++) {
      let product_info_key = localStorage.key(i);
      let product_info = localStorage.getItem(localStorage.key(i));
      let product_info_value = JSON.parse(product_info);

      // console.log(product_info_key +" : "+ product_info_value)
      product_table += `
      <tr>
      <td>${j}</td>
      <td>${product_info_value.product_name}</td>
      <td><img src="${product_info_value.product_image}" alt="${product_info_value.product_image}" width="50px"></td>
      <td id="product_amount">#${product_info_value.product_price}</td>
      <td class="col-2">
        <div class="row text-center justify-content-center float-left">

          <div class="col-md-3 p-0 m-0 cart_item cart_item_minus" onclick="increase_product (this)">-</div>

          <div class="col-md-5 px-1">
            <input type="text" name="item_number" value="1" id="cart_item_number" class="form-control text-center mx-auto" disabled>
          </div>

          <div class="col-md-3 p-0 m-0 cart_item cart_item_plus" onclick="increase_product(this)">+</div>
        </div>
      </td>
      <td id="product_total_amount">#${product_info_value.product_price}</td>
      <td><button class="btn btn-danger" onclick="remove_from_cart(this)"> Remove </button></td>
    </tr>
    `;
      j++;
      total_amount.push(Number(product_info_value.product_price));
    }

    console.log(total_amount)

    product_table += `
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th class="bg-dark text-white">Total Amount:</th>
            <th id="total_amount" class="bg-dark text-white">#${total_amount.reduce(reduced_array)}</th>
            <th class="bg-dark text-white"></th>
          </tr>
        </tfoot>
        </tbody>
        </table>

        <div class="row px-5">
        <div class="col-lg-9 col-md-8 col-sm-6 mb-4">
          <a href="index.html" class="px-3 float-end"><h5>Continue Shopping...</h5></a>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
          <a href="checkout.html" class="btn btn-warning px-3 float-end" onclick="checkout()">Proceed To Check-out</a>
        </div>
      </div>
        `;
  cart_items_table.innerHTML = product_table;

} else {
  cart_items_table.innerHTML = `<div class="empty_cart m-5 d-flex align-item-center justify-content-center"> 
                                  Your Cart is Empty. <a href="index.html" class="px-2"> Continue shopping...</a>
                                </div>`;
}


// ************ SUMMING UP ALL PRODUCT ARRAY VALUE ************//

function reduced_array(total, value) {
  return total + value;  
}
