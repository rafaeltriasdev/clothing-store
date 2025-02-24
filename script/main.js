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
  if (username === 'admin' && password === 'password') {
      alert('Inicio de sesión exitoso');
      // Aquí puedes redirigir o mostrar el panel de administración
      document.getElementById('login-form').style.display = 'none';
  } else {
      alert('Usuario o contraseña incorrectos');
  }
});

// Manejar el cambio de tema
document.getElementById('theme-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-theme'); // Alterna la clase de tema oscuro

  // Cambia el texto del botón según el tema actual
  if (document.body.classList.contains('dark-theme')) {
      this.textContent = 'Light';
  } else {
      this.textContent = 'Dark';
  }
});