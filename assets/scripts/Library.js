// Objeto libro
class libro {
    constructor(titulo, autor, portada, fechaPublicacion){
        this.titulo = titulo;
        this.autor= autor;
        this.portada= portada;
        this.fechaPublicacion= fechaPublicacion;
    }
    
};

var arrayLibros = [];

//lista de libros
arrayLibros.push(new libro("El Principito", "Antoine de Saint-Exupéry y Kan Nozaki", "https://upload.wikimedia.org/wikipedia/commons/1/1c/El_principito.jpg", "Fecha de Publicación"))

arrayLibros.push(new libro("El Principito", "Antoine de Saint-Exupéry y Kan Nozaki", "https://upload.wikimedia.org/wikipedia/commons/1/1c/El_principito.jpg", "Fecha de Publicación"))

arrayLibros.push(new libro("El Principito", "Antoine de Saint-Exupéry y Kan Nozaki", "https://upload.wikimedia.org/wikipedia/commons/1/1c/El_principito.jpg", "Fecha de Publicación"))

arrayLibros.push(new libro("El Principito", "Antoine de Saint-Exupéry y Kan Nozaki", "https://upload.wikimedia.org/wikipedia/commons/1/1c/El_principito.jpg", "Fecha de Publicación"))

arrayLibros.push(new libro("El Principito", "Antoine de Saint-Exupéry y Kan Nozaki", "https://upload.wikimedia.org/wikipedia/commons/1/1c/El_principito.jpg", "Fecha de Publicación"))

arrayLibros.push(new libro("El Principito", "Antoine de Saint-Exupéry y Kan Nozaki", "https://upload.wikimedia.org/wikipedia/commons/1/1c/El_principito.jpg", "Fecha de Publicación"))

arrayLibros.push(new libro("El Principito", "Antoine de Saint-Exupéry y Kan Nozaki", "https://upload.wikimedia.org/wikipedia/commons/1/1c/El_principito.jpg", "Fecha de Publicación"))

arrayLibros.push(new libro("El Principito", "Antoine de Saint-Exupéry y Kan Nozaki", "https://upload.wikimedia.org/wikipedia/commons/1/1c/El_principito.jpg", "Fecha de Publicación"))

arrayLibros.push(new libro("El Principito", "Antoine de Saint-Exupéry y Kan Nozaki", "https://upload.wikimedia.org/wikipedia/commons/1/1c/El_principito.jpg", "Fecha de Publicación"))

arrayLibros.push(new libro("El Principito", "Antoine de Saint-Exupéry y Kan Nozaki", "https://upload.wikimedia.org/wikipedia/commons/1/1c/El_principito.jpg", "Fecha de Publicación"))



 // Obtén el contenedor en el que deseas insertar la estructura
 var contenedor = document.getElementById("containerTarjetas");

 // Crea los elementos HTML
 var divRow = document.createElement("div");
 divRow.className = "row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4";

function insertarLibro (libro){

    var divCol = document.createElement("div");
    divCol.className = "col d-flex justify-content-center";

    var divCard = document.createElement("div");
    divCard.className = "card";

    var img = document.createElement("img");
    img.src = libro.portada;
    img.className = "card-img-top";
    img.alt = libro.titulo;

    var divCardBody = document.createElement("div");
    divCardBody.className = "card-body";

    var h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.textContent = libro.autor;

    var p = document.createElement("p");
    p.className = "card-text";
    p.textContent = libro.fechaPublicacion;

    // var a = document.createElement("a");
    // a.href = "";
    // a.className = "btn btn-primary";
    // a.textContent = "Leer";

    // Construye la estructura anidando los elementos
    divCardBody.appendChild(h5);
    divCardBody.appendChild(p);

    // divCardBody.appendChild(a);

    divCard.appendChild(img);
    divCard.appendChild(divCardBody);

    divCol.appendChild(divCard);

    divRow.appendChild(divCol);

    // Inserta la estructura en el contenedor
    
}


arrayLibros.forEach(element => {
    insertarLibro(element)   
});


contenedor.appendChild(divRow);