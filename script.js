"use strict";

const menuBtn = document.querySelector(".menu-btn");
const dropMenu = document.querySelector(".drop-menu");
const hero = document.querySelector(".hero");
const section = document.querySelectorAll("section");
const appointmentCard = document.querySelectorAll(".card-box");
const appointment = document.querySelector(".appointment");
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

for (let i = 0; i < appointmentCard.length; i++) {
  appointmentCard[i].addEventListener("click", () => {
    appointment.style.display = "flex";
    appointment.style.opacity = "1";
  });
}

closeBtn.addEventListener("click", () => {
  appointment.style.display = "none";
});

// staffBtn.addEventListener("click", () => {
//   // e.preventDefault();
//   accepted.innerText = "Appointement Booked!";
// });
