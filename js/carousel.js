const btnRight = document.querySelector(".right");
const btnLeft = document.querySelector(".left");
const slides = document.querySelector(".slides");
const firstSlideClone = document.getElementById("slide1").cloneNode(true);
const lastSlideClone = document.getElementById("slide3").cloneNode(true);
const indexPoints = document.querySelectorAll(".index");
let compteur = 1;
let isAnimating = false;
slides.insertBefore(lastSlideClone, slides.children[0]);
slides.appendChild(firstSlideClone);
firstSlideClone.classList.add("no-desk");
lastSlideClone.classList.add("no-desk");

btnRight.addEventListener("click", async () => {
  if (isAnimating || window.innerWidth > 1365) return; // Bloque l'animation pendant la transition
  isAnimating = true;
  compteur = compteur + 1;
  slides.style.transition = "0.2s";
  slides.style.transform = "translateX(" + compteur * -100 + "vw)";
  if (compteur == 4) {
    compteur = 1;
    indexPoints[2].classList.remove("active");
    indexPoints[compteur - 1].classList.add("active");
    await new Promise((resolve) => setTimeout(resolve, 200));
    slides.style.transition = "0s";
    slides.style.transform = "translateX(" + compteur * -100 + "vw)";
  } else {
    indexPoints[compteur - 2].classList.remove("active");
  }
  indexPoints[compteur - 1].classList.add("active");

  //Délai avant de réactiver les clics
  isAnimating = false;
});

btnLeft.addEventListener("click", async () => {
  if (isAnimating || window.innerWidth > 1365) return; // Bloque l'animation pendant la transition
  isAnimating = true;
  compteur = compteur - 1;
  slides.style.transition = "0.2s";
  slides.style.transform = "translateX(" + compteur * -100 + "vw)";
  if (compteur == 0) {
    compteur = 3;
    indexPoints[0].classList.remove("active");
    indexPoints[compteur - 1].classList.add("active");
    await new Promise((resolve) => setTimeout(resolve, 200));
    slides.style.transition = "0s";
    slides.style.transform = "translateX(" + compteur * -100 + "vw)";
  } else {
    indexPoints[compteur].classList.remove("active");
  }
  indexPoints[compteur - 1].classList.add("active");

  //Délai avant de réactiver les clics
  isAnimating = false;
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1366) {
    slides.style.transform = "translateX(0vw)";
    indexPoints[compteur - 1].classList.add("active");
  }
});
window.onload = () => {
  if (window.innerWidth < 1366) {
    slides.style.transform = "translateX(" + compteur * -100 + "vw)";
    indexPoints[compteur - 1].classList.toggle("active");
  }
};
