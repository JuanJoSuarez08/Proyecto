 // Función para validar las credenciales
 function validarCredenciales(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Credenciales predefinidas
    const credencialesCorrectas = {
        username: "admin",
        password: "1234"
    };

    // Obtener valores del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validar las credenciales
    if (username === credencialesCorrectas.username && password === credencialesCorrectas.password) {
        // Si las credenciales son correctas, redirigir a la página de bienvenida
        window.location.href = "Bienvenida.html";
    } else {
        // Mostrar mensaje de error si son incorrectas
        alert("Usuario o contraseña incorrectos");
    }
}