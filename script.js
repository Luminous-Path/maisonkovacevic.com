let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
function myMap() {
myCenter=new google.maps.LatLng(42.510868, +21.882183);
var mapOptions= {
center:myCenter,
zoom:12, scrollwheel: false, draggable: true,
mapTypeId:google.maps.MapTypeId.ROADMAP
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

var marker = new google.maps.Marker({
position: myCenter,
});
marker.setMap(map);
}
function openNav() {
document.getElementById("mySidenav").style.width = "250px";
document.getElementById("mySidenav").style.display = "block";
document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
document.getElementById("mySidenav").style.display = "none";
document.body.style.backgroundColor = "white";
}

let LastTopScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
let TopScroll = window.scrollY  || document.documentElement.TopScroll;

if (TopScroll > LastTopScroll) {
header.style.top = '-98px';
}
else {
 header.style.top ="0";
}

LastTopScroll = TopScroll;

});
