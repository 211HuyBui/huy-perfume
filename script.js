// Get the "Add to Cart" buttons
const buttons = document.querySelectorAll(".perfume button");

// Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener("click", event => {
    // Get the perfume name and price from the button's parent element
    const perfume = event.target.parentNode;
    const name = perfume.querySelector("h3").textContent;
    const price = perfume.querySelector("p").textContent;

    // Add the perfume to the cart
    addToCart(name, price);
  });
});

// Define the addToCart function
function addToCart(name, price) {
  // Check if the cart exists in local storage
  if (localStorage.getItem("cart") === null) {
    // If the cart doesn't exist, create an empty array and store it in local storage
    localStorage.setItem("cart", JSON.stringify([]));
  }

  // Get the cart from local storage
  let cart = JSON.parse(localStorage.getItem("cart"));

  // Add the new perfume to the cart
  cart.push({ name: name, price: price });

  // Store the updated cart in local storage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Display a message to the user
  alert(name + " has been added to the cart!");
}