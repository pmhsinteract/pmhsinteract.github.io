let hamIcon = document.getElementById("ham-icon");
let hamMenu = document.querySelector(".hamMenu");
let hamToggle = false;

document.addEventListener('click', function(event) {
  const targetElement = event.target;

  if (!hamIcon.contains(targetElement) && !hamMenu.contains(targetElement) && hamToggle) {
    hamMenu.style.transform = "translateX(350px)";
    hamIcon.src = "../images/hammenu.png";
    document.body.style.overflow = ""; // Enable background scroll
    hamToggle = false;
  }
});

hamIcon.addEventListener("click", function() {
  if (!hamToggle) {
    hamIcon.src = "../images/X.png";
    hamMenu.style.transform = "translateX(-350px)";
    hamMenu.style.transition = "ease .7s";
    document.body.style.overflow = "hidden"; // Disable background scroll
    hamToggle = true;
  } else {
    hamMenu.style.transform = "translateX(350px)";
    hamMenu.style.transition = "ease .7s";
    hamIcon.src = "../images/hammenu.png";
    document.body.style.overflow = ""; // Re-enable background scroll
    hamToggle = false;
  }
});

document.querySelectorAll('.hamMenu a').forEach(link => {
  link.addEventListener('click', () => {
    hamMenu.style.transform = "translateX(350px)";
    document.body.style.overflow = ""; // Re-enable scroll
    hamIcon.src = "../images/hammenu.png";
    hamToggle = false;
  });
});
