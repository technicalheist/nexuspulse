// Sidenav bar script 
function openNav() {
    document.getElementById("mySidenav-mobile").style.width = "375px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav-mobile").style.width = "0";
  }
// add a class in header on scroll 

window.addEventListener('scroll', function() {
    var header = document.getElementById('myHeader');

    if (window.scrollY > 200) { 
        header.classList.add('scrolled-header');
    } else {
        header.classList.remove('scrolled-header');
    }
});

// animation start 
AOS.init();

AOS.init({
  disable: false, 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init', 
  animatedClassName: 'aos-animate', 
  useClassNames: false, 
  disableMutationObserver: false, 
  debounceDelay: 50, 
  throttleDelay: 99, 
  
  offset: 120, 
  delay: 0, 
  duration: 400, 
  easing: 'ease', 
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom', 

});

// go to top
const goToTopButton = document.getElementById("goToTopButton");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goToTopButton.style.display = "block";
    } else {
        goToTopButton.style.display = "none";
    }
};

// Scroll to the top of the document when the button is clicked
goToTopButton.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});


jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});