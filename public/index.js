
$('#carouselExampleSlidesOnly').on('slid.bs.carousel', function () {
  var $carousel = $(this);
  if ($carousel.find('.carousel-item:last').hasClass('active')) {
      // Last slide reached, reset to first slide
      $carousel.carousel('pause').carousel(0);
  }
});

// Initialize the carousel with the desired interval
$('#carouselExampleSlidesOnly').carousel({
  interval: 1000 // Change slide every 2 seconds
});
document.addEventListener("DOMContentLoaded", function() {
  const addToCartButtons = document.querySelectorAll(".addToCartBtn");
  const messageBox = document.getElementById("messageBox");

  addToCartButtons.forEach(function(button) {
      button.addEventListener("click", function() {
          
          var messageBox = document.getElementById("messageBox");
          messageBox.style.display = "block";
          setTimeout(function() {
              messageBox.style.display = "none";
          }, 2000); 
      });
  });
});

function redirectToAnotherPage() {
 
  window.location.href = 'contact.html';
}
function viewcart(){
  window.location.href='viewcart.html';
}
function Sunglasses(){
  window.location.href='sunglasses.html';
}
function Login(){
  window.location.href='log in.html'
}

