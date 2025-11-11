

let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total.toFixed(2);
}
let cart = [];

function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');

  cartItems.innerHTML = '';

  let total = 0;
  let totalItems = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} x${item.quantity} - R$ ${(item.price * item.quantity).toFixed(2)}`;
    cartItems.appendChild(li);

    total += item.price * item.quantity;
    totalItems += item.quantity;
  });

  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = totalItems;
}

