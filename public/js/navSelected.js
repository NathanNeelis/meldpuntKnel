// menu
const navOverzicht = document.querySelector(".navOverzicht");
const navAgenda = document.querySelector(".navAgenda");
const navVerbeteren = document.querySelector(".navVerbeteren");
const navProfiel = document.querySelector(".navProfiel");

const overzichtWrapper = document.getElementById("overview");
const agendaWrapper = document.getElementById("calender");
const verbeterWrapper = document.getElementById("innovation");
const profielWrapper = document.getElementById("profile");

overzichtWrapper.addEventListener("mousemove", (e) => {
  navOverzicht.classList.add("nav_active");
  navAgenda.classList.remove("nav_active");
  navVerbeteren.classList.remove("nav_active");
  navProfiel.classList.remove("nav_active");
});

navOverzicht.addEventListener("click", (e) => {
  navOverzicht.classList.add("nav_active");
  navAgenda.classList.remove("nav_active");
  navVerbeteren.classList.remove("nav_active");
  navProfiel.classList.remove("nav_active");
});

agendaWrapper.addEventListener("mousemove", (e) => {
  navOverzicht.classList.remove("nav_active");
  navAgenda.classList.add("nav_active");
  navVerbeteren.classList.remove("nav_active");
  navProfiel.classList.remove("nav_active");
});

navAgenda.addEventListener("click", (e) => {
  navOverzicht.classList.remove("nav_active");
  navAgenda.classList.add("nav_active");
  navVerbeteren.classList.remove("nav_active");
  navProfiel.classList.remove("nav_active");
});

verbeterWrapper.addEventListener("mousemove", (e) => {
  navOverzicht.classList.remove("nav_active");
  navAgenda.classList.remove("nav_active");
  navVerbeteren.classList.add("nav_active");
  navProfiel.classList.remove("nav_active");
});

navVerbeteren.addEventListener("click", (e) => {
  navOverzicht.classList.remove("nav_active");
  navAgenda.classList.remove("nav_active");
  navVerbeteren.classList.add("nav_active");
  navProfiel.classList.remove("nav_active");
});

profielWrapper.addEventListener("mousemove", (e) => {
  navOverzicht.classList.remove("nav_active");
  navAgenda.classList.remove("nav_active");
  navVerbeteren.classList.remove("nav_active");
  navProfiel.classList.add("nav_active");
});

navProfiel.addEventListener("click", (e) => {
  navOverzicht.classList.remove("nav_active");
  navAgenda.classList.remove("nav_active");
  navVerbeteren.classList.remove("nav_active");
  navProfiel.classList.add("nav_active");
});
