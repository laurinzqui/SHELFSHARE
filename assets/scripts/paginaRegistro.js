// Aqui ira el JS para paginaRegistro


//Este codigo revisa que las dos contraseñas sean iguales
function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
      return false;
    }

  }