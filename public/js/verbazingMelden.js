const verbazingen = document.querySelector(".lc-verbeteren");
const verbazingMelden = document.querySelector(".verbazingMelden");

const verbazingMeldenBtn = document.querySelector(".lc-nieuwe-verbazing");
const verbazingMeldenBackBtn = document.querySelector("#verbazingMeldenBack");

verbazingMeldenBtn.addEventListener("click", (e) => {
  verbazingen.classList.remove("active");
  verbazingMelden.classList.add("active");
});

verbazingMeldenBackBtn.addEventListener("click", (e) => {
  verbazingen.classList.add("active");
  verbazingMelden.classList.remove("active");
});
