"use strict";

const menuBtn = document.querySelector(".menu-btn");
const navBtn = document.querySelector(".menu .nav-btn");
const bookNow = document.querySelectorAll(".btn");
const dropMenu = document.querySelector(".drop-menu");
const hero = document.querySelector(".hero");
const section = document.querySelectorAll("section");
const appointmentCard = document.querySelectorAll(".card-box");
const appointment = document.querySelector(".appointment");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close");
const staffBtn = document.querySelector(".staff-btn");
const accepted = document.querySelector(".accepted");

hero.addEventListener("mouseover", () => {
  if (dropMenu.style.display === "flex") dropMenu.style.display = "none";
});

for (let i = 0; i < section.length; i++) {
  section[i].addEventListener("mouseover", () => {
    if (dropMenu.style.display === "flex") dropMenu.style.display = "none";
  });
}

menuBtn.addEventListener("click", () => {
  if (dropMenu.style.display === "flex") dropMenu.style.display = "none";
  else dropMenu.style.display = "flex";
});

// open/close form modal
const openModal = function (e) {
  e.preventDefault();
  overlay.classList.remove("hidden");
  appointment.classList.remove("hidden");
};
const closeModal = function () {
  overlay.classList.add("hidden");
  appointment.classList.add("hidden");
};
// book now buttons
bookNow.forEach((btn) => btn.addEventListener("click", openModal));

navBtn.addEventListener("click", () => (dropMenu.style.display = "none"));
// Dentist's cards
for (let i = 0; i < appointmentCard.length; i++) {
  appointmentCard[i].addEventListener("click", openModal);
}

closeBtn.addEventListener("click", closeModal);

// close modal by clicking on overlay
overlay.addEventListener("click", closeModal);

// staffBtn.addEventListener("click", () => {
//   // e.preventDefault();
//   accepted.innerText = "Appointement Booked!";
// });

///////////////////////////////////////////
// sections scrolling
// using event-deligation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

const navBar = document.querySelector(".navbar");
navBar.addEventListener("click", function (e) {
  e.preventDefault(); // if we didn't prevent default, the scrolling options won't apply

  // matching the wanted children
  if (e.target.classList.contains("nav-link")) {
    // the href attribute
    const id = e.target.getAttribute("href");
    // console.log(id);
    // scroll to the section of the same id as href
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
