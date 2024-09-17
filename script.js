// Define an object to store cart items
let cart = [];
let cartItems = [];

// Function to add item to the cart
function addToCart(item) {
    cartItems.push(item);
}

// Function to add item to cart
function addToCart(product) {
    const existingProductIndex = cart.findIndex(item => item.title === product.title);
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity++;
    } else {
        product.quantity = 1; // Set initial quantity
        cart.push(product);
    }
    displayCart();
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

// Function to update quantity
function updateQuantity(index, newQuantity) {
    cart[index].quantity = parseInt(newQuantity); // Parse quantity as integer
    displayCart();
}

// Function to display cart
function displayCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = ''; // Clear previous content

    cart.forEach((product, index) => {
        const itemHTML = `
      <div class="cart-item">
        <span>${product.title}</span>
        <span>Price: ${product.price}</span>
        <input type="number" value="${product.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
        cartElement.insertAdjacentHTML('beforeend', itemHTML);
    });
}

// Function to place order
function placeOrder() {
    // Implement order placement logic here
    console.log('Placing order:', cart);
    // You can send the cart data to a server for further processing
}

// Initialize the cart display
displayCart();
