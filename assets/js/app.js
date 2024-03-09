"use strict";

const mobileContainer = document.querySelector(".mobile-nav-container");
const openMenuBtn = document.querySelector(".open-mobile-nav");
const closeMenuBtn = document.querySelector(".close-mobile-nav");
const dropdownItems = document.querySelectorAll(".has-dropdown");

openMenuBtn.addEventListener("click", function () {
  mobileContainer.classList.remove("hidden");
  document.body.classList.add("overflow");
});
closeMenuBtn.addEventListener("click", function () {
  mobileContainer.classList.add("hidden");
  document.body.classList.remove("overflow");
});
dropdownItems.forEach((element) => {
  element.addEventListener("click", (item) => {
    const dropdownMenu = item.currentTarget.querySelector(".dropdown-menu");
    const arrow = item.currentTarget.querySelector(".arrow");
    dropdownMenu.classList.toggle("show-dropdown");
    arrow.classList.toggle("rotate");
  });
});
