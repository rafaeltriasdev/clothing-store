document.addEventListener("DOMContentLoaded", function () {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const clearCartBtn = document.getElementById("clear-cart-btn");
    const checkoutBtn = document.getElementById("checkout-btn");

    let total = 0;

    // Mostrar los productos en el carrito
    cartItems.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>${item.quantity}</td>
        <td>$${(item.price * item.quantity).toFixed(2)}</td>
        <td><button class="btn btn-danger btn-sm remove-item">Eliminar</button></td>
      `;
      cartItemsContainer.appendChild(row);

      total += item.price * item.quantity;

      row.querySelector(".remove-item").addEventListener("click", function () {
        removeFromCart(item.name);
      });
    });

    cartTotal.textContent = total.toFixed(2);

    // Vaciar el carrito
    clearCartBtn.addEventListener("click", function () {
      localStorage.removeItem("cart");
      location.reload(); // Recargar la página para actualizar la vista
    });

    // Finalizar la compra
    checkoutBtn.addEventListener("click", function () {
      if (cartItems.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de finalizar la compra.");
        return;
      }

      // Aquí puedes implementar la lógica para procesar el pago o enviar los datos al servidor
      alert("¡Gracias por tu compra! Procesaremos tu pedido.");
      localStorage.removeItem("cart");
      location.reload(); // Vaciar el carrito después de finalizar la compra
    });
  });

  function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.name !== productName);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload(); // Recargar la página para actualizar la vista
  }