const navbar = document.querySelector("nav");
const stickyPoint = navbar.offsetTop;

//variables for details
const gameDetailSection = document.querySelector(".game-details");
const section = document.querySelector("section");
const mainTag = document.querySelector("main");
const headerSection = document.querySelector("header");
const navbarTag = document.querySelector("nav");

//variables for home page
const navbarList = document.querySelector(".navbar-nav");
const spinner = document.querySelector(".spinner");
let category = "mmorpg";
const mainSection = document.querySelector(".main-section");
const links = Array.from(
  document.querySelectorAll(".collapse .navbar-nav li a")
);
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "7593d57ff7msh3f53dc8c1c498b2p185e5fjsn249fec9d36ce",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  },
};

//handling navbar
window.addEventListener("scroll", function () {
  if (window.scrollY >= stickyPoint) {
    navbar.classList.add("sticky");
    navbar.style.width = "100%";
  } else {
    navbar.classList.remove("sticky");
    navbar.style.width = "75%";
  }
});

