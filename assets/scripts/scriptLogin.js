//definicion de variables

var formCorreo = document.getElementById("typeEmailX");
var formPassword = document.getElementById("typePasswordX");
var botonLogin = document.getElementById("botonLogin");
var alertDiv = document.getElementById("alertDiv");


var divContent = ` `;

//localStorage
localStorage.setItem("username", "rafael@hotmail.com");
localStorage.setItem("password", "admin12345")



function loginUsuario(username, password) {

    //validacion de credenciales


    fetch(`https://deploy-production-b07c.up.railway.app/shelfshare/users/${username}`, {
      method: "GET", // or 'PUT'
    }).then(function(response) {//response es la respuesta del servidor
      response.json().then(function (json) { 
        
        
        //json es el objeto que se obtiene del servicio

        if(json==null){
            console.log("Usuario no existe")
            divContent = `
            <div class="alert alert-warning fixed-top" role="alert">
            <strong>usuario inexistente</strong> Completa el campo correctamente.
    
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
           
          </div>
          `;



        }else if(json.contrasena == password){
           console.log("credenciales correctas")
          //HTTP redirect:
          window.location.replace("../paginaPrincipal.html");


        }else{


          divContent = `
        <div class="alert alert-warning fixed-top" role="alert">
        <strong>contraseña incorrecta</strong> Completa el campo correctamente.

        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       
      </div>
      `;
          console.log("contraseña incorrecta")
        }
          
          
         
      });//then
  }).catch(function(err) { //si hay un error
      console.log(err); //imprime el error
  });
















    // if (username == localStorage.username) {
    //     //si el usuario existe:

    //     if (password == localStorage.password) {
    //         //si la contraseña es correcta:
    //         divContent = `
    //         <div class="alert alert-success fixed-top" role="alert">
    //         <strong>Bienvenido ${username}</strong>
    
    //         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
           
    //       </div>`;

    //         //HTTP redirect:
    //         window.location.replace("../paginaPrincipal.html");

    //     }
    //     else {
    //         divContent = `
    //     <div class="alert alert-warning fixed-top" role="alert">
    //     <strong>contraseña incorrecta</strong> Completa el campo correctamente.

    //     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       
    //   </div>
    //   `;

    //     }



    // }
    // else {
    //     divContent = `
    //     <div class="alert alert-warning fixed-top" role="alert">
    //     <strong>usuario incorrecto</strong> Completa el campo correctamente.

    //     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       
    //   </div>
    //   `;
    // }




}

function validarFormulario() {



    //Serie de if que va chechando que cada valor no este vacion
    if (!formCorreo.value) {

        // se crea la alerta y se guarda como texto dentro de divContent
        divContent = `
        <div class="alert alert-warning fixed-top" role="alert">
        <strong>correo invalido</strong> Completa el campo correctamente.

        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       
      </div>
      `;

        // Insertar el contenido en el cuerpo del documento


    } else if (!formPassword.value) {
        divContent = `
        <div class="alert alert-warning fixed-top" role="alert">
        <strong>contraseña invalida</strong> Completa el campo correctamente.

        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       
      </div>
      `;
    }

    else {

        loginUsuario(formCorreo.value, formPassword.value)

        //se llama la funcion para verificar el Acceso

    }


    //se agrega la alerta creada al div "alertDiv" que es el que la contendrá
    alertDiv.innerHTML += divContent;



}



//se agrega evento para cuando hagan click en el botonLogin

botonLogin.addEventListener("click", function () {

    //se manda la funcion como funcion anonima

    validarFormulario();

});

