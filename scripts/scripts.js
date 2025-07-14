let hamIcon = document.getElementById("ham-icon");

let hamMenu = document.querySelector(".hamMenu");

var hamToggle = false;


document.addEventListener('click', function(event) {
  const targetElement = event.target; // The element that was clicked

  if (!hamIcon.contains(targetElement) && !hamMenu.contains(targetElement) && hamIcon.style.transform !== 'translateX(350px)') {

    hamMenu.style.transform = "translateX(350px)";
    hamIcon.src = "../images/hammenu.png";
    hamToggle = false;
  }
});

hamIcon.addEventListener("click", function() {
    if(hamToggle === false) {
        hamIcon.src = "../images/X.png";
        hamMenu.style.transform = "translateX(-350px)";
        hamMenu.style.transition = "ease .7s";
        hamToggle = true;
    } else {
            hamMenu.style.transform = "translateX(350px)";
        hamMenu.style.transition = "ease .7s";
        hamIcon.src = "../images/hammenu.png";
        hamToggle = false;
    }
})

document.querySelectorAll('.hamMenu a').forEach(link => {
    link.addEventListener('click', () => {
        hamMenu.style.right = '-375px';
        isOpen = false;
    });
});