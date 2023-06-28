//este js es para la validacion de los datos ingresados en la página de contactanos

//definimos las variables del usuario

var formUserNames = document.getElementById("userNames");
var formUserSurnames = document.getElementById("userSurnames");
var formUserEmail = document.getElementById("userEmail");
var formUserAsunto = document.getElementById("userAsunto");
var formUserMensaje = document.getElementById("userMensaje");
var botonEnviar=document.getElementById("botonEnviar");

var alertDiv = document.getElementById("alertDiv");

function validarCampos(){
    var divAlertContent = "";
    var expresionNombre = /^[a-zA-Z\s]+$/; //indica que se puede usar mayusculas y minusculas y espacios en blanco y que el + indica que se puede repetir uno o más cacracteres
    var expresionEmail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    //en esta experios verificamos que antes(y despues) del arroba tengamos una combinacion de numeros y letras mayus y minus, pueda tener puntos y guiones, guionesbajos. tenemos el punto con \. ; y finalmente la ultima seccion indica que la extension del dominio tenga al menos dos letras con posibilidad de ser mayusculas y minusculas.
    //verificamos los valores llenados
    if(!formUserNames.value || !expresionNombre.test(formUserNames.value)){
        divAlertContent=`
        <div class="alert alert-warning fixed-top" role="alert">
        <strong> No ha ingresado Nombre(s)</strong> complete el campo correctamente.

        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="close"></button>

        </div>`;
    }else if(!formUserSurnames.value || !expresionNombre.test(formUserSurnames.value)){
        divAlertContent=`
        <div class="alert alert-warning fixed-top" role="alert">
        <strong> No ha ingresado Apellido(s)</strong> complete el campo correctamente.

        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="close"></button>

        </div>`;
    }else if(!formUserEmail.value || !expresionEmail.test(formUserEmail.value)){
        divAlertContent=`
        <div class="alert alert-warning fixed-top" role="alert">
        <strong> No ha ingresado un correo electrónico valido</strong> complete el campo correctamente.

        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="close"></button>

        </div>`;
    }else if(!formUserAsunto.value){
        divAlertContent=`
        <div class="alert alert-warning fixed-top" role="alert">
        <strong> No ha ingresado un Asunto</strong> complete el campo correctamente.

        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="close"></button>

        </div>`;
    }else if(!formUserMensaje.value){
        divAlertContent=`
        <div class="alert alert-warning fixed-top" role="alert">
        <strong> No ha ingresado un Mensaje</strong> complete el campo correctamente.

        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="close"></button>

        </div>`;
    }else{
        divAlertContent=`
        <div class="alert alert-warning fixed-top" role="alert">
        <strong> Datos ingresados</strong> campos llenados correctamente.

        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="close"></button>

        </div>`;
        
    }
    //agregamos el contenido a alertdiv
    alertDiv.innerHTML+=divAlertContent;
}

botonEnviar.addEventListener("click", validarCampos);