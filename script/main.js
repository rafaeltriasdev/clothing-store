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

document.getElementById('login-link').addEventListener('click', function() {
  document.getElementById('login-form').style.display = 'block';
});

document.getElementById('cancel-login').addEventListener('click', function() {
  document.getElementById('login-form').style.display = 'none';
});

document.getElementById('form-login').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe realmente

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Aquí puedes agregar tu lógica de validación
  if (username === 'admin' && password === 'admin') {
      alert('Inicio de sesión exitoso');
      // Aquí puedes redirigir o mostrar el panel de administración
      document.getElementById('login-form').style.display = 'none';
  } else {
      alert('Usuario o contraseña incorrectos');
  }
});

// Botón para desplazar hacia arriba
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}