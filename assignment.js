window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
// Sample data for cart items
const cartItems = [
    {
      id: 1,
      name: "Razer Blade Laptop",
      description: "Powerful gaming laptop with a sleek design",
      price: 1799.99,
      quantity: 1,
      image: "images/blade18.PNG",
    },
    {
      id: 2,
      name: "Razer DeathAdder V2",
      description: "Ergonomic, high-precision gaming mouse",
      price: 69.99,
      quantity: 1,
      image: "images/mouserazer.PNG",
    },
    {
      id: 3,
      name: "Razer Kraken Headset",
      description: "Immersive sound and comfort for long gaming sessions",
      price: 99.99,
      quantity: 1,
      image: "images/headset.PNG",
    },
  ];
  
  const cartContainer = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("total-price");
  
  function renderCart() {
    cartContainer.innerHTML = "";
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
      const cartItemEl = document.createElement("div");
      cartItemEl.classList.add("cart-item");
      cartItemEl.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="item-details">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <span class="item-price">$${item.price.toFixed(2)}</span>
          <input type="number" value="${item.quantity}" min="1" class="item-quantity" data-id="${item.id}">
          <button class="remove-item" data-id="${item.id}">Remove</button>
        </div>
      `;
      cartContainer.appendChild(cartItemEl);
    });
    totalPriceEl.textContent = `$${total.toFixed(2)}`;
  }
  
  // Update quantity or remove items
  cartContainer.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (e.target.classList.contains("remove-item")) {
      const index = cartItems.findIndex((item) => item.id == id);
      if (index !== -1) {
        cartItems.splice(index, 1);
      }
    } else if (e.target.classList.contains("item-quantity")) {
      const newQuantity = e.target.value;
      const item = cartItems.find((item) => item.id == id);
      if (item) {
        item.quantity = newQuantity;
      }
    }
    renderCart();
  });
  
  renderCart();
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    form.addEventListener("submit", (e) => {
        let isValid = true;

        // Email Validation
        if (!emailInput.value.includes("@") || emailInput.value.length < 5) {
            emailError.textContent = "Please enter a valid email address.";
            emailError.style.display = "block";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }

        // Password Validation
        if (passwordInput.value.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters.";
            passwordError.style.display = "block";
            isValid = false;
        } else {
            passwordError.style.display = "none";
        }

        // Prevent form submission if invalid
        if (!isValid) {
            e.preventDefault();
        }
    });
});
document.getElementById("signup-form").addEventListener("submit", function (e) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        e.preventDefault();
        alert("Passwords do not match. Please try again.");
    }
});
  