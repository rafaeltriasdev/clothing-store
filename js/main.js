document.addEventListener("DOMContentLoaded", function() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const navLinks = document.getElementById("nav-links");

  if (usuario) {
      navLinks.innerHTML = `
          <li class="nav-item">
              <span class="nav-link">Bienvenido, ${usuario.nombre} ${usuario.apellido}!</span>
          </li>
          <li class="nav-item">
              <button class="btn btn-danger" id="logout">Cerrar sesión</button>
          </li>
      `;

      document.getElementById("logout").addEventListener("click", function() {
          localStorage.removeItem("usuario");
          window.location.href = "index.html";
      });
  } else {
      navLinks.innerHTML = `
          <li class="nav-item">
              <a class="nav-link" href="#" id="login-link">Iniciar sesión</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="register.html">Registrarse</a>
          </li>
      `;
  }
});

// Inicializa el contador de artículos en el carrito
let cartCount = 0;

// Función para agregar un producto al carrito
function addToCart() {
  cartCount++;
  updateCartCount();
}

// Actualiza el contador de artículos en el carrito
function updateCartCount() {
  document.getElementById("cart-count").textContent = cartCount;
}

// Añadir evento a los botones de "Agregar al carrito"
document.querySelectorAll(".btn-primary").forEach(button => {
  button.addEventListener("click", addToCart);
});

// Mostrar formulario de inicio de sesión
document.getElementById("login-link").addEventListener("click", function() {
  document.getElementById("login-form").style.display = "block";
});

// Ocultar formulario de inicio de sesión
document.getElementById("cancel-login").addEventListener("click", function() {
  document.getElementById("login-form").style.display = "none";
});

// Validación de inicio de sesión
document.getElementById("form-login").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "admin") {
      alert("Inicio de sesión exitoso");
      localStorage.setItem("usuario", JSON.stringify({ nombre: "Admin", apellido: "" }));
      window.location.href = "index.html";
  } else {
      alert("Usuario o contraseña incorrectos");
  }
});

// Botón para desplazar hacia arriba
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}