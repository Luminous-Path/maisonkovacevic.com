
function openTab(evt, tabName) {
  var tabContents = document.getElementsByClassName("houseslideimg");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
    tabContents[i].classList.remove("active");

  }

  var tabLinks = document.getElementsByClassName("imgselect");
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active");

  }
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");

}
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.imgselect').click();
});
const header1 = document.getElementById('header');
var modal = document.getElementById("Modal");
function openmodal()
{
  modal.style.display="flex";
  header1.style.top = '-98px';
  history.pushState({ modalOpen: true }, 'Modal', '');
}
function closemodal()
{
  modal.style.display="none";
  header1.style.top = '0px';
  history.back();
}
let IndexSlide = 1;
Slidesshow(IndexSlide);

function Slidesplus(n) {
  Slidesshow(IndexSlide += n);
}

function Slidecurrent(n) {
  Slidesshow(IndexSlide = n);
}

function Slidesshow(n) {
  let i;
  let slides1 = document.getElementsByClassName("modalslide");
  if (n > slides1.length) {IndexSlide = 1}
  if (n < 1) {IndexSlide = slides1.length}
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  slides1[IndexSlide-1].style.display = "flex";
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closemodal();
  }
})

window.addEventListener('popstate', function(event) {
    if (event.state && event.state.modalOpen) {
        closemodal(); // Close modal if the state indicates it's open
    } else {
        modal.style.display = 'none'; // Ensure the modal is hidden when navigating away
            }
  });