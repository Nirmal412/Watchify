// This function will be called when the HTML document is fully loaded
// document.addEventListener("DOMContentLoaded", function () {
    
  
    // Access the element in file2.html with ID "element2"
    // const element2 = document.getElementById("element2");
  
    // // Check if the elements were found
    // if (element1 && element2) {
    //   // Manipulate the elements
    //   element1.textContent = "Modified element 1";
    //   element2.style.backgroundColor = "yellow";
    // } else {
    //   console.log("One or both elements were not found.");
    // }
//   });


import { cartId, item, price } from "./shop";

                    // Get the cart elements and total bill element for the selected cart
                    const cart = document.getElementById(cartId);
                    const cartItemsList = cart.querySelector(`#cart-items${cartId.slice(-1)}`);
                    const cartTotal = cart.querySelector(`#cart-total${cartId.slice(-1)}`);
    
                    // Create a list item for the item and add it to the cart
                    const listItem = document.createElement('li');
                    listItem.textContent = `${item} - $${price.toFixed(2)}`;
                    cartItemsList.appendChild(listItem);
                    
    
                    // Update the total bill for the cart
                    const currentTotal = parseFloat(cartTotal.textContent);
                    cartTotal.textContent = (currentTotal + price).toFixed(2);
    
                    // Display username if provided
                    const username = usernameInput.value.trim();
                    if (username) {
                        cartTotal.textContent += ` (Name: ${username})`;
                    }