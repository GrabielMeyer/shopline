let cart = [];

function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  updateCart();
  animateCart();
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

function animateCart() {
  const cart = document.getElementById('cart');
  cart.classList.add('shake');
  setTimeout(() => cart.classList.remove('shake'), 400);
}
