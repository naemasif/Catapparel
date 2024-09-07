let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    // Add product to cart array
    cart.push({ productName, price });
    
    // Update total price
    totalPrice += price;
    
    // Display cart items
    displayCartItems();
    console.log(`${productName} added to cart for $${price}`);
}

function displayCartItems() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = ""; // Clear previous items
    
    cart.forEach(item => {
        const div = document.createElement("div");
        div.textContent = `${item.productName} - $${item.price}`;
        cartItems.appendChild(div);
    });
    
    // Update total price
    document.getElementById("total-price").textContent = totalPrice;
}

let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const totalItems = document.querySelectorAll('.carousel .product').length;
    const itemsVisible = 3; // Showing 3 products at a time
    const itemWidth = carousel.querySelector('.product').offsetWidth;

    currentIndex += direction;

    // Limit carousel movement within bounds
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > totalItems - itemsVisible) {
        currentIndex = totalItems - itemsVisible;
    }

    const offset = -(itemWidth * currentIndex);
    carousel.style.transform = `translateX(${offset}px)`;
}

