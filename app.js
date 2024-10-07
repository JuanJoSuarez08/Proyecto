    // Validación de credenciales
    function validarCredenciales(event) {
      event.preventDefault(); // Evitar que el formulario se envíe

      // Credenciales que deseas establecer
      const credencialesCorrectas = {
          username: "Juan",
          password: "Juan2005*"
      };

      // Obtener valores del formulario
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Validar las credenciales
      if (username === credencialesCorrectas.username && password === credencialesCorrectas.password) {
          // Redirigir si las credenciales son correctas
          window.location.href = "Bienvenida.html";
      } else {
          // Mostrar mensaje de error si son incorrectas
          alert("Usuario o contraseña incorrectos");
      }
  }

  // Control de la animación para alternar entre Sign In y Sign Up
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");

  sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
  });

  sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
  });