let pet1 ={
    name:"Scooby",
    petAge:50,
    petGender:"Male"
}
console.log(pet1);

let pet2 ={
    name:"Daisy",
    petAge:3,
    petGender:"Female"
}
console.log(pet2);
let pet3 ={
    name:"Sunny",
    petAge:5,
    petGender:"Male"
}
console.log(pet3);
let pet4 ={
    name:"Janis",
    petAge:21,
    petGender:"Female"
}
console.log(pet4);

alert("We have 4 Registered Pets!");

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


