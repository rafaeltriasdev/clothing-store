document.getElementById("registro-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const edad = document.getElementById("edad").value;

    if (edad < 18) {
        alert("Debes ser mayor de edad para registrarte.");
        return;
    }

    localStorage.setItem("usuario", JSON.stringify({ nombre, apellido, email }));
    window.location.href = "../index.html"; // Redirigir
});