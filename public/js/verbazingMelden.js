const verbazingen = document.querySelector(".lc-verbeteren");
const verbazingMelden = document.querySelector(".verbazingMelden");
const verbazingOverzicht = document.querySelector(".verbazingOverzicht");
const vochtlijstenMeldingDetails = document.querySelector(
  ".vl-melding-details"
);

const vochtlijsten = document.querySelector(".verb-vochtlijsten");
const verbazingMeldenBtn = document.querySelector(".lc-nieuwe-verbazing");
const backToVerbazingen = document.querySelectorAll(".backToVerbazingen");
const backToVerbazingsOverzicht = document.querySelectorAll(
  ".backToVerbazingsOverzicht"
);

const vochtlijstenMelding1 = document.querySelector(".vochtlijsten-melding1");

verbazingMeldenBtn.addEventListener("click", (e) => {
  verbazingen.classList.remove("active");
  verbazingOverzicht.classList.remove("active");
  verbazingMelden.classList.add("active");
});

vochtlijsten.addEventListener("click", (e) => {
  verbazingen.classList.remove("active");
  verbazingMelden.classList.remove("active");
  verbazingOverzicht.classList.add("active");
});

vochtlijstenMelding1.addEventListener("click", (e) => {
  vochtlijsten.classList.remove("active");
  vochtlijstenMeldingDetails.classList.add("active");
  verbazingOverzicht.classList.remove("active");
  verbazingen.classList.remove("active");
  verbazingMelden.classList.remove("active");
});

for (var i = 0; i < backToVerbazingen.length; i++) {
  backToVerbazingen[i].addEventListener("click", function (e) {
    verbazingMelden.classList.remove("active");
    verbazingOverzicht.classList.remove("active");
    vochtlijstenMeldingDetails.classList.remove("active");
    verbazingen.classList.add("active");
  });
}

for (var i = 0; i < backToVerbazingsOverzicht.length; i++) {
  backToVerbazingsOverzicht[i].addEventListener("click", function (e) {
    verbazingen.classList.remove("active");
    verbazingMelden.classList.remove("active");
    verbazingOverzicht.classList.add("active");
    vochtlijstenMeldingDetails.classList.remove("active");
  });
}
