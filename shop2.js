const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');

btnCart.addEventListener('click',()=>{
  cart.classList.add('cart-active');
});

btnClose.addEventListener('click',()=>{
  cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
  loadContent();

}

function loadContent(){
  //Remove Food Items  From Cart
  let btnRemove=document.querySelectorAll('.cart-remove');
  btnRemove.forEach((btn)=>{
    btn.addEventListener('click',removeItem);
  });

  //Product Item Change Event
  let qtyElements=document.querySelectorAll('.cart-quantity');
  qtyElements.forEach((input)=>{
    input.addEventListener('change',changeQty);
  });

  //Product Cart
  
  let cartBtns=document.querySelectorAll('.add-cart');
  cartBtns.forEach((btn)=>{
    btn.addEventListener('click',addCart);
  });

  updateTotal();
}


//Remove Item
function removeItem(){
  if(confirm('Are Your Sure to Remove')){
    let title=this.parentElement.querySelector('.cart-food-title').innerHTML;
    itemList=itemList.filter(el=>el.title!=title);
    this.parentElement.remove();
    loadContent();
  }
}

//Change Quantity
function changeQty(){
  if(isNaN(this.value) || this.value<1){
    this.value=1;
  }
  loadContent();
}

let itemList=[];

//Add Cart
function addCart(){
 let food=this.parentElement;
 let title=food.querySelector('.food-title').innerHTML;
 let price=food.querySelector('.food-price').innerHTML;
 let imgSrc=food.querySelector('.food-img').src;
 //console.log(title,price,imgSrc);
 
 let newProduct={title,price,imgSrc}

 //Check Product already Exist in Cart
 if(itemList.find((el)=>el.title==newProduct.title)){
  alert("Product Already added in Cart");
  return;
 }else{
  itemList.push(newProduct);
 }


let newProductElement= createCartProduct(title,price,imgSrc);
let element=document.createElement('div');
element.innerHTML=newProductElement;
let cartBasket=document.querySelector('.cart-content');
cartBasket.append(element);
loadContent();
}


function createCartProduct(title,price,imgSrc){

  return `
  <div class="cart-box">
  <img src="${imgSrc}" class="cart-img">
  <div class="detail-box">
    <div class="cart-food-title">${title}</div>
    <div class="price-box">
      <div class="cart-price">${price}</div>
       <div class="cart-amt">${price}</div>
   </div>
    <input type="number" value="1" class="cart-quantity">
  </div>
  <ion-icon name="trash" class="cart-remove"></ion-icon>
</div>
  `;
}

function updateTotal()
{
  const cartItems=document.querySelectorAll('.cart-box');
  const totalValue=document.querySelector('.total-price');

  let total=0;

  cartItems.forEach(product=>{
    let priceElement=product.querySelector('.cart-price');
    let price=parseFloat(priceElement.innerHTML.replace("Rs.",""));
    let qty=product.querySelector('.cart-quantity').value;
    total+=(price*qty);
    product.querySelector('.cart-amt').innerText="Rs."+(price*qty);

  });

  totalValue.innerHTML='Rs.'+total;


  // Add Product Count in Cart Icon

  const cartCount=document.querySelector('.cart-count');
  let count=itemList.length;
  cartCount.innerHTML=count;

  if(count==0){
    cartCount.style.display='none';
  }else{
    cartCount.style.display='block';
  }


}
// Get a reference to the cart content element
const cartContent = document.querySelector('.cart-content');

// Find all cart items with the name "Special Dosai" and remove them
const cartItemsToRemove = cartContent.querySelectorAll('.cart-food-title');
cartItemsToRemove.forEach((cartItem) => {
  if (cartItem.textContent === 'Special Dosai') {
    // Remove the entire cart item by going up the DOM hierarchy
    const cartItemElement = cartItem.closest('.cart-box');
    if (cartItemElement) {
      cartItemElement.remove(); // Remove the cart item element
    }
  }
});

// Recalculate the total price and update it here
// You may need to update the total price logic if it's calculated dynamically

// Update the cart count and total price as needed
const cartCount = document.querySelector('.cart-count');
const totalPrice = document.querySelector('.total-price');
cartCount.textContent = 'Updated cart count'; // Update the cart count
totalPrice.textContent = 'Updated total price'; // Update the total price



document.addEventListener('DOMContentLoaded', function () {
  const cartItems = document.querySelectorAll('.cart-box'); // Select all cart items
  const totalPriceElement = document.querySelector('.total-price');
  const placeOrderBtn = document.querySelector('.btn-buy');

  // Function to calculate and update the total price
  function updateTotalPrice() {
    let total = 0;
    cartItems.forEach(function (cartItem) {
      const priceElement = cartItem.querySelector('.cart-price');
      const quantityElement = cartItem.querySelector('.cart-quantity');
      const price = parseFloat(priceElement.textContent.replace('Rs.', '').trim());
      const quantity = parseInt(quantityElement.value);
      total += price * quantity;
    });

    totalPriceElement.textContent = `Rs. ${total.toFixed(2)}`;
  }

  // Event listener for the "Place Order" button
  // placeOrderBtn.addEventListener('click', function () {
  //   const totalAmount = parseFloat(totalPriceElement.textContent.replace('Rs.', '').trim());
    
  //   // Prompt the user for their name
  //   const customerName = prompt('Please enter your name:');
    
  //   if (customerName) {
  //     alert(`Dear ${customerName}, your total bill amount is Rs. ${totalAmount.toFixed(2)}. Thank you for your order!`);
  //   } else {
  //     alert('Order not placed. Please enter your name.');
  //   }
  // });

  // Event listeners to update the total price when quantity changes
  cartItems.forEach(function (cartItem) {
    const quantityElement = cartItem.querySelector('.cart-quantity');
    quantityElement.addEventListener('input', updateTotalPrice);
  });

  // Initial calculation of the total price
  updateTotalPrice();
});


// ... Your existing code ...

// Function to handle the "Place Order" button click
// function placeOrder() {
//   // Calculate the total bill amount (You need to implement this based on your logic)
//   const totalBill = calculateTotalBill(); // Replace with your calculation logic

//   // Prompt the user for their name
//   const customerName = prompt('Please enter your name:');

//   if (customerName) {
//       // Redirect to the order summary page and pass the customer name and total bill as query parameters
//       window.location.href = `order_summary.html?customerName=${customerName}&totalBill=${totalBill}`;
//   } else {
//       alert('Order not placed. Please enter your name.');
//   }
// }

document.addEventListener('DOMContentLoaded', function () {
  const cartItems = document.querySelectorAll('.cart-box'); // Select all cart items
  const totalPriceElement = document.querySelector('.total-price');
  const placeOrderBtn = document.querySelector('.btn-buy');

  // Function to calculate and update the total price
  function updateTotalPrice() {
    let total = 0;
    cartItems.forEach(function (cartItem) {
      const priceElement = cartItem.querySelector('.cart-price');
      const quantityElement = cartItem.querySelector('.cart-quantity');
      const price = parseFloat(priceElement.textContent.replace('Rs.', '').trim());
      const quantity = parseInt(quantityElement.value);
      total += price * quantity;
    });

    totalPriceElement.textContent = `Rs. ${total.toFixed(2)}`;
  }

  // Event listener for the "Place Order" button
  // placeOrderBtn.addEventListener('click', function () {
  //   const totalAmount = parseFloat(totalPriceElement.textContent.replace('Rs.', '').trim());

  //   // Prompt the user for their name
  //   const customerName = prompt('Please enter your name:');
    
  //   // Prompt the user for their address
  //   const customerAddress = prompt('Please enter your address:');

  //   if (customerName && customerAddress) {
  //     // Display the order summary
  //     const orderSummary = `Dear ${customerName}, your total bill amount is Rs. ${totalAmount.toFixed(2)}. Your order will be delivered to the following address: ${customerAddress}`;
  //     alert(orderSummary);
  //   } else {
  //     alert('Order not placed. Please enter your name and address.');
  //   }
  // });

  // Event listeners to update the total price when quantity changes
  cartItems.forEach(function (cartItem) {
    const quantityElement = cartItem.querySelector('.cart-quantity');
    quantityElement.addEventListener('input', updateTotalPrice);
  });

  // Initial calculation of the total price
  updateTotalPrice();
});







document.addEventListener('DOMContentLoaded', function () {
  const cartItems = document.querySelectorAll('.cart-box');
  const totalPriceElement = document.querySelector('.total-price');
  const placeOrderBtn = document.querySelector('.btn-buy');

  function updateTotalPrice() {
    let total = 0;
    cartItems.forEach(function (cartItem) {
      const priceElement = cartItem.querySelector('.cart-price');
      const quantityElement = cartItem.querySelector('.cart-quantity');
      const price = parseFloat(priceElement.textContent.replace('Rs.', '').trim());
      const quantity = parseInt(quantityElement.value);
      total += price * quantity;
    });

    totalPriceElement.textContent = `Rs. ${total.toFixed(2)}`;
  }

  placeOrderBtn.addEventListener('click', function () {
    const totalAmount = parseFloat(totalPriceElement.textContent.replace('Rs.', '').trim());

    const customerName = prompt('Please enter your name:');
    const customerAddress = prompt('Please enter your address:');

    if (customerName && customerAddress) {
      // Store customerName and customerAddress in sessionStorage
      sessionStorage.setItem('customerName', customerName);
      sessionStorage.setItem('customerAddress', customerAddress);
      sessionStorage.setItem('totalBill', totalAmount.toFixed(2));

      // Redirect to the order_summary.html page
      window.location.href = 'order_summary.html';
    } else {
      alert('Order not placed. Please enter your name and address.');
    }
  });

  cartItems.forEach(function (cartItem) {
    const quantityElement = cartItem.querySelector('.cart-quantity');
    quantityElement.addEventListener('input', updateTotalPrice);
  });

  updateTotalPrice();
});

document.addEventListener('DOMContentLoaded', function () {
  const cartItems = document.querySelectorAll('.cart-box'); // Select all cart items
  const totalPriceElement = document.querySelector('.total-price');
  const placeOrderBtn = document.querySelector('.btn-buy');

  // Function to calculate and update the total price
  function updateTotalPrice() {
    let total = 0;
    cartItems.forEach(function (cartItem) {
      const priceElement = cartItem.querySelector('.cart-price');
      const quantityElement = cartItem.querySelector('.cart-quantity');
      const price = parseFloat(priceElement.textContent.replace('Rs.', '').trim());
      const quantity = parseInt(quantityElement.value);
      total += price * quantity;
    });

    totalPriceElement.textContent = `Rs. ${total.toFixed(2)}`;
  }

  // Event listener for the "Place Order" button
  // placeOrderBtn.addEventListener('click', function () {
  //   const totalAmount = parseFloat(totalPriceElement.textContent.replace('Rs.', '').trim());

  //   // Prompt the user for their name
  //   const customerName = prompt('Please enter your name:');
    
  //   // Prompt the user for their address
  //   const customerAddress = prompt('Please enter your address:');

  //   if (customerName && customerAddress) {
  //     // Redirect to the order summary page and pass the customer name, address, and total bill as query parameters
  //     window.location.href = `order_summary.html?customerName=${encodeURIComponent(customerName)}&customerAddress=${encodeURIComponent(customerAddress)}&totalBill=${totalAmount.toFixed(2)}`;
  //   } else {
  //     alert('Order not placed. Please enter your name and address.');
  //   }
  // });

  // Event listeners to update the total price when quantity changes
  cartItems.forEach(function (cartItem) {
    const quantityElement = cartItem.querySelector('.cart-quantity');
    quantityElement.addEventListener('input', updateTotalPrice);
  });

  // Initial calculation of the total price
  updateTotalPrice();
});



// ...

// Add Cart
function addCart() {
  let food = this.parentElement;
  let title = food.querySelector('.food-title').innerHTML;
  let price = food.querySelector('.food-price').innerHTML;
  let imgSrc = food.querySelector('.food-img').src;

  // Create a new product object with details
  let newProduct = { title, price, imgSrc };

  // Check if the product already exists in the cart
  if (itemList.find((el) => el.title === newProduct.title)) {
    alert('Product Already added in Cart');
    return;
  } else {
    itemList.push(newProduct);
  }

  // Store the selected products in localStorage
  localStorage.setItem('selectedProducts', JSON.stringify(itemList));

  let newProductElement = createCartProduct(title, price, imgSrc);
  let element = document.createElement('div');
  element.innerHTML = newProductElement;
  let cartBasket = document.querySelector('.cart-content');
  cartBasket.append(element);
  loadContent();
}