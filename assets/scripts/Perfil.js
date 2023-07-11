
/*Script para formulario de check genero
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // para evitar el envío del formulario por defecto

    // Obténer los géneros seleccionados
    var generosSeleccionados = [];
    var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
    for (var i = 0; i < checkboxes.length; i++) {
      generosSeleccionados.push(checkboxes[i].value);
    }

    // Para mostrar los generos en pantalla
    console.log(generosSeleccionados);

    // Aquí podemos realizar otras acciones con los géneros seleccionados, como enviarlos a algun servidor 
  });

//Aqui termina script formulario género*/

//Funcion para cambiar imagen
// JavaScript
function cambiarImagen() {
  const inputImagen = document.createElement('input');
  inputImagen.type = 'file';
  inputImagen.accept = 'image/*';

  inputImagen.addEventListener('change', function () {
    const file = inputImagen.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const imagen = document.getElementById('imagen');
      imagen.src = e.target.result;
    };

    reader.readAsDataURL(file);
  });

  inputImagen.click();
}


//Funcion de guardar informacion de usuario en formularios
function guardarInformacion() {
  var nombreUsuario = document.getElementById("nombreUsuario").value;
  var generoLibros = document.getElementById("generoLibros").value;
  var acercaDeMi = document.getElementById("acercaDeMi").value;
  // Aquí obtenemos y guardamos los valores los demás campos de entrada


  // Por ahora, simplemente mostraremos los datos en la consola
  console.log("Nombre de usuario: " + nombreUsuario);
  console.log("Género de libros: " + generoLibros);
  console.log("Acerca de mí: " + acercaDeMi);
}







var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

function guardarInformacion() {
    var nombreUsuario = document.getElementById("nombreUsuario").value.trim();
    var generoLibros = document.getElementById("generoLibros").value.trim();
    var acercaDeMi = document.getElementById("acercaDeMi").value.trim();
    var facebookLink = document.getElementById("facebookLinkInput").value.trim();
    var instagramLink = document.getElementById("instagramLinkInput").value.trim();
    var twitterLink = document.getElementById("twitterLinkInput").value.trim();

    if (nombreUsuario !== "") {
        document.getElementById("UserInfoNombre").textContent = nombreUsuario;
    }

    if (generoLibros !== "") {
        document.getElementById("UserInfoGeneroLibros").textContent = generoLibros;
    }

    if (acercaDeMi !== "") {
        document.getElementById("UserInfoAcercaDeMi").textContent = acercaDeMi;
    }

    if (facebookLink !== "") {
        document.getElementById("facebookLink").setAttribute("href", facebookLink);
    }

    if (instagramLink !== "") {
        document.getElementById("instagramLink").setAttribute("href", instagramLink);
    }

    if (twitterLink !== "") {
        document.getElementById("twitterLink").setAttribute("href", twitterLink);
    }

    // Reset the form
    document.getElementById("editForm").reset();
}