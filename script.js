var navLinks = document.getElementById('navlinks');

function showMenu(){
  navlinks.style.right = '0';
}

function hideMenu(){
  navlinks.style.right = '-150px';
}

var myIndex = 0;

carousel();
    
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex - 1].style.display = "block";  
  setTimeout(carousel, 1500); // Change image every 2 seconds
}