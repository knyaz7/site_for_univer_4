const nav__course = document.querySelector("#nav__course"); 
const nav__prepod = document.querySelector("#nav__prepod"); 
const nav__review = document.querySelector("#nav__review"); 

const courses = document.querySelector("#courses"); 
const images = document.querySelector("#images"); 
const reviews = document.querySelector("#order-form"); 

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

nav__course.addEventListener("click", function() {
    scrollTo(courses);
});

nav__prepod.addEventListener("click", function() {
    scrollTo(images);
});

nav__review.addEventListener("click", function() {
    scrollTo(reviews);
});
