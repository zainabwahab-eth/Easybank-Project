const hambuger = document.querySelector(".hamburger")
const navlinks = document.querySelector(".navlinks")
const overlay = document.querySelector(".overlay")

hambuger.addEventListener("click", () => {
    navlinks.classList.toggle("show");
    overlay.classList.toggle("hidden");

})