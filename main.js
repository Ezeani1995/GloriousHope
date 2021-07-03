let menuBtn = document.querySelector(".menu-btn");
let mainList = document.querySelector(".main-list");

menuBtn.addEventListener("click", () => {
    mainList.classList.toggle("show");
})