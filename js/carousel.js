let btnRight = document.querySelector(".right");
let btnLeft = document.querySelector(".left");
let slides = document.querySelector(".slides");
let compteur = 0;

btnRight.addEventListener("click", () => {
    compteur = compteur + 1;
    if (compteur == 3) {
        compteur = 0;
    }
    slides.style.transform = "translateX(" + compteur * -100 + "vw)";
    console.log(compteur);

})

btnLeft.addEventListener("click", () => {
    compteur = compteur - 1;
    if (compteur == -1) {
        compteur = 2;
    }
    slides.style.transform = "translateX(" + compteur * -100 + "vw)";
    console.log(compteur);
})