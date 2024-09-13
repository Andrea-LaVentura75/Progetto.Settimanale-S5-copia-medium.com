let navbar = document.querySelector("header");
let button = document.querySelector("button");
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 270) {
    navbar.classList.add("colore2Navbar");
    button.classList.add("colore2Button");
  } else {
    navbar.classList.remove("colore2Navbar");
    button.classList.remove("colore2Button");
  }
});
let allGroups = document.querySelectorAll("svg g");

const prova = function () {
  allGroups.forEach((group, index) => {
    let opacityValue = group.getAttribute("opacity");

    if (opacityValue === "0") {
      setTimeout(() => {
        group.setAttribute("opacity", "1");
      }, index * 1);
    } else {
      group.setAttribute("opacity", "1");
    }
  });
};

window.onload = function () {
  prova();
};
