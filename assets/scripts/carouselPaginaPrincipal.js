
function adjustCarousel(carousel, minPerSlide) {
    const items = carousel.querySelectorAll('.carousel-item');

    items.forEach((el) => {
        let next = el.nextElementSibling;
        for (let i = 1; i < minPerSlide; i++) {
            if (!next) {
                // Wrap carousel by using the first child
                next = items[0];
            }
            let cloneChild = next.cloneNode(true);
            el.appendChild(cloneChild.children[0]);
            next = next.nextElementSibling;
        }
    });
}


const carousel1 = document.querySelector('#carousel1');
adjustCarousel(carousel1, 4);  // Adjust carousel1 with minPerSlide = 4

const carousel2 = document.querySelector('#carousel2');
adjustCarousel(carousel2, 4);  

/*
let items = document.querySelectorAll('.carousel .carousel-item');

items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0];
      	}
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
    }
})

*/

