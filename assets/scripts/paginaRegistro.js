// Aqui ira el JS para paginaRegistro


//definicion de variables

var formUsuario = document.getElementById("userName");
var formCorreo = document.getElementById("emailAddress");
var formNumero = document.getElementById("phoneNumber");
var formNacimiento = document.getElementById("birthdayDate")
var botonRegistro = document.getElementById("botonRegistro")
var checkboxTerminos = document.getElementById("checkTerminos")

var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");

var alertDiv = document.getElementById("alertDiv");



function registrarUsuario(){
    var divContent= ` `;
    

    //Serie de if que va chechando que cada valor no este vacion
    if(!formUsuario.value){

      // se crea la alerta y se guarda como texto dentro de divContent
        divContent = `
        <div class="alert alert-warning fixed-top" role="alert">
        <strong>usuario invalido</strong> Completa el campo correctamente.

        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       
      </div>
      `;
      
      // Insertar el contenido en el cuerpo del documento
     

    } else if(!formCorreo.value){
        divContent = `
        <div class="alert alert-warning fixed-top" role="alert">
        <strong>correo invalido</strong> Completa el campo correctamente.

        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       
      </div>
      `;
    }

    else if(!formNumero.value){
        divContent = `
        <div class="alert alert-warning fixed-top" role="alert">
        <strong>numero invalido</strong> Completa el campo correctamente.

        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       
      </div>
      `;
    }
    else if(!formNacimiento.value){
        divContent = `
        <div class="alert alert-warning fixed-top" role="alert">
        <strong>fecha invalida</strong> Completa el campo correctamente.

        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       
      </div>
      `;



    }


    else if ((!password.value || password !== confirmPassword) && password.value.length < 6) {
      divContent = `
        <div class="alert alert-warning fixed-top" role="alert">
        <strong>Contraseña invalida</strong> Completa el campo correctamente y verifque que sean iguales.

        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       
      </div>
      `;
    }

    else if(!checkboxTerminos.value){
      divContent = `
      <div class="alert alert-warning fixed-top" role="alert">
      <strong>T&C No aceptado</strong> Lea con atencion los Terminos y condiciones.

      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     
    </div>
    `;



  }


    else{
        divContent = `
        <div class="alert alert-success fixed-top" role="alert">
        <strong>Libro ingresado</strong>

        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       
      </div>`;

      //se crea el libro

      var Usuario = {
        Nombre: formUsuario.value,
        Fecha: formNacimiento.value,
        Correo: formCorreo.value,
        Numero: formNumero.value,
       Password: password.value

      };

      //se convierte a formato JSON

      var usuarioJson = JSON.stringify(Usuario);

    console.log(usuarioJson);


    }


    //se agrega la alerta creada al div "alertDiv" que es el que la contendrá
    alertDiv.innerHTML+=divContent;



}



//se agrega evento para cuando hagan click en el botonRegistro

botonRegistro.addEventListener("click", function () {

    //se manda la funcion como funcion anonima

    registrarUsuario();
    
});

