
// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}


// Adjust the parallax scrolling effect
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
  
    document.querySelectorAll('.bgimg-1, .bgimg-2, .bgimg-3').forEach(function(element) {
      // Adjust the speed and ensure background stays within view
      element.style.backgroundPositionY = -(scrolled * 0.5) + "px"; // Adjust multiplier for desired speed
    });
  });
  
  
  
