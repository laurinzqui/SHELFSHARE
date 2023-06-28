// Aqui ira el JS para registroLibros

//definicion de variables

var formTitulo = document.getElementById("formTitle");
var formAutor = document.getElementById("formAutor");
var formFecha = document.getElementById("formDate");
var formSinopsis = document.getElementById("formSnps")
var formPdf = document.getElementById("formFile");
var formPortada = document.getElementById("formImg");
var botonRegistro = document.getElementById("botonRegistro");
var alertDiv = document.getElementById("alertDiv");



function registrarLibro(){
    var divContent= ` `;
    

    //Serie de if que va chechando que cada valor no este vacion
    if(!formTitulo.value){

      // se crea la alerta y se guarda como texto dentro de divContent
        divContent = `
        <div class="alert alert-warning fixed-top" role="alert">
        <strong>Titulo invalido</strong> Completa el campo correctamente.

        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       
      </div>
      `;
      
      // Insertar el contenido en el cuerpo del documento
     

    } else if(!formAutor.value){
        divContent = `
        <div class="alert alert-warning fixed-top" role="alert">
        <strong>Autor invalido</strong> Completa el campo correctamente.

        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       
      </div>
      `;
    }

    else if(!formFecha.value){
        divContent = `
        <div class="alert alert-warning fixed-top" role="alert">
        <strong>Fecha invalida</strong> Completa el campo correctamente.

        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       
      </div>
      `;
    }
    else if(!formSinopsis.value){
        divContent = `
        <div class="alert alert-warning fixed-top" role="alert">
        <strong>Sinopsis invalida</strong> Completa el campo correctamente.

        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       
      </div>
      `;
    }

    else if(!formPdf.value){
        divContent = `
        <div class="alert alert-warning fixed-top" role="alert">
        <strong>Pdf invalido</strong> Completa el campo correctamente.

        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       
      </div>
      `;
    }

    else if(!formPortada.value){
        divContent = `
        <div class="alert alert-warning fixed-top" role="alert">
        <strong>imagen invalida</strong> Completa el campo correctamente.

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

      var libro = {
        titulo: formTitulo.value,
        sinopsis: formSinopsis.value,
        autor: formAutor.value,
        pdf: formPdf.value,
        portada: formPortada.value,
        fecha: formFecha.value,

      };

      //se convierte a formato JSON

      var libroJson = JSON.stringify(libro);

    console.log(libroJson);


    }


    //se agrega la alerta creada al div "alertDiv" que es el que la contendrá
    alertDiv.innerHTML+=divContent;



}



//se agrega evento para cuando hagan click en el botonRegistro

botonRegistro.addEventListener("click", function () {

    //se manda la funcion como funcion anonima
  
    registrarLibro();
    
});



