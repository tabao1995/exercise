// slide js
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
  var slides = document.getElementsByClassName("myslide");
  var dots = document.getElementsByClassName("dot");
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
}
// form validate 
function validate() {
  let x = document.forms['myform']['name'].value
  let y = document.forms['myform']['address'].value
  let z = document.forms['myform']['email'].value
  if ( x , y , z == "" ) {alert (' Vui Lòng Điền đầy đủ thông tin')
  return false}
  if ( z.includes("@") != true || z.includes('.') != true ) {alert(' Vui lòng điền email chính xác')
  return false}
 
}
// Mobile menu js 
let menuMobile =document.getElementById('menu-mobile')
let dropdown = document.getElementsByClassName('menu')[0]
 menuMobile.onclick = function () {
  let iscloser = dropdown.clientHeight 
  if (iscloser == 44) {
    dropdown.style.height = 'auto'
    dropdown.style
  } else {
    dropdown.style.height = '44px'
  }
 }

