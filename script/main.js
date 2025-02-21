// Inicializa el contador de artículos en el carrito
let cartCount = 0;

// Función para agregar un producto al carrito
function addToCart() {
  cartCount++;
  updateCartCount();
}

// Actualiza el contador de artículos en el carrito
function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count");
  cartCountElement.textContent = cartCount;
}

// Añadir evento a los botones de "Agregar al carrito"
const addToCartButtons = document.querySelectorAll(".btn-primary");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});
