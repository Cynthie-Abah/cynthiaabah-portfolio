// SIDEBAR REVEAL TOGGLE
const hamburger = document.getElementById("hamburger");
const mobileNavBar = document.getElementById("mobile-nav-div");
const navDiv = document.querySelector(".mobile-nav-bar");
const href = document.querySelectorAll(".mobile-nav-bar ul li a");

href.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNavBar.style.display = "none";
    navDiv.classList.remove("mobile-nav-style");
    hamburger.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  });
});

hamburger.addEventListener("click", () => {
  if (mobileNavBar.style.display === "block") {
    mobileNavBar.style.display = "none";
    navDiv.classList.remove("mobile-nav-style");
    hamburger.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    mobileNavBar.style.display = "block";
    navDiv.classList.add("mobile-nav-style");
    hamburger.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
});
