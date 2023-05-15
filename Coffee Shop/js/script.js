let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// shopping cart 
const addToCartBtn = document.querySelector('.add-to-cart-btn');

addToCartBtn.addEventListener('click', function() {
  // add code to add item to cart here
});


  var cart = [];

  function addItem() {
    var item = {"name": "Product", "price": 10};
    cart.push(item);
    updateCart();
  }

function updateCart() {
  var cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var itemDiv = document.createElement("div");
    itemDiv.innerHTML = item.name + " - $" + item.price;
    cartDiv.appendChild(itemDiv);
  }
}

