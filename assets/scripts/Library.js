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

arrayLibros.push(new libro("Harry Potter y el prisionero de Azkaban ", "J.k. Rowling", "./assets/imgs/harryPotter.jpg", "1999"))

arrayLibros.push(new libro("Moby Dick", "Herman Melville", "./assets/imgs/coverMobyDick.png", "1851"))

arrayLibros.push(new libro("Escrituras españolas del siglo XIX", "Maria Del Carmen Simón Palmer", "./assets/imgs/LibroEspañol.jpg", "Fecha de Publicación"))

arrayLibros.push(new libro("Alicia en el país de las maravillas", "Lewis Carroll", "./assets/imgs/aliciaPaisMaravillas.jpg", "1860"))

arrayLibros.push(new libro("Mil y unas noches", "anonimo", "./assets/imgs/milYUnaNoche.jpg", "1814 a 1818"))

arrayLibros.push(new libro("La isla del tesoro", "Robert Louis Stevenson", "./assets/imgs/coverIslaTesoro.png", "1883"))

arrayLibros.push(new libro("Ana de las tejas ", "Lucy Maud Montgomery", "./assets/imgs/anaDeLasTejasVerdes.jpg", "1908"))

arrayLibros.push(new libro("Crimen y castigo", "Fedor M.Dostoievski", "./assets/imgs/crimenYCastigo.jpg", "1866"))

arrayLibros.push(new libro("El fantasma de Canterville", "Oscar Wilde", "./assets/imgs/elFantasmaDeCanterville.jpg", "1887"))



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
    img.addEventListener("click", function(){
        window.location.href="../publicaciones.html"
    })

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