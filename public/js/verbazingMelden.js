const verbazingen = document.querySelector(".lc-verbeteren");
const verbazingMelden = document.querySelector(".verbazingMelden");
const verbazingOverzicht = document.querySelector(".verbazingOverzicht");
const vochtlijstenMeldingDetails = document.querySelector(
  ".vl-melding-details"
);
const vochtlijstenMeldingDetailsER = document.querySelector(
  ".vl-melding-er-details"
);

const vochtlijsten = document.querySelector(".verb-vochtlijsten");
const verbazingMeldenBtn = document.querySelector(".lc-nieuwe-verbazing");
const backToVerbazingen = document.querySelectorAll(".backToVerbazingen");
const backToVerbazingsOverzicht = document.querySelectorAll(
  ".backToVerbazingsOverzicht"
);

const vochtlijstenMelding1 = document.querySelector(".vochtlijsten-melding1");
const vochtlijstenMelding2 = document.querySelector(".vochtlijsten-melding2");

// input from redirects
const tempInputPage = document.querySelector(".inputPage");
const tempInputAnnuleer = document.querySelector(".annuleerInput");
const tempInputOpslaan = document.querySelector(".saveInput");

const tempInputPageVLER = document.querySelector(".inputPageVLER");
const tempInputAnnuleerVLER = document.querySelector(".annuleerInputVLER");
const tempInputOpslaanVLER = document.querySelector(".saveInputVLER");

// temp inputs
const temp_vl_situatie = document.querySelector(".VL-TI-situatie");
const temp_vl_ov = document.querySelector(".VL-TI-OV");
const temp_vl_wg = document.querySelector(".VL-TI-WG");
const temp_vl_ev = document.querySelector(".VL-TI-EV");

const temp_vlER_situatie = document.querySelector(".VLER-TI-situatie");
const temp_vlER_ov = document.querySelector(".VLER-TI-OV");
const temp_vlER_wg = document.querySelector(".VLER-TI-WG");
const temp_vlER_ev = document.querySelector(".VLER-TI-EV");

// original inputs
// melding NN
const input_vl_situatie = document.querySelector("#verb-vl-melden-situatie");
const input_vl_omschrijving_verbeteractie = document.querySelector(
  "#omschrijving_vl_verbeteractie"
);
const input_vl_omschrijving_geslaagd = document.querySelector(
  "#omschrijving_vl_geslaagd"
);
const input_vl_evaluatie = document.querySelector("#vl-evaluatie");

// melding ER
const input_vlER_situatie = document.querySelector(
  "#verb-vlER-melden-situatie"
);
const input_vlER_omschrijving_verbeteractie = document.querySelector(
  "#omschrijving_vlER_verbeteractie"
);
const input_vlER_omschrijving_geslaagd = document.querySelector(
  "#omschrijving_vlER_geslaagd"
);
const input_vlER_evaluatie = document.querySelector("#vlER-evaluatie");

// back to and go to pages
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

// melding vochtlijsten 1 NN openen
vochtlijstenMelding1.addEventListener("click", (e) => {
  vochtlijsten.classList.remove("active");
  vochtlijstenMeldingDetails.classList.add("active");
  verbazingOverzicht.classList.remove("active");
  verbazingen.classList.remove("active");
  verbazingMelden.classList.remove("active");
});

// melding vochtlijsten 2 ER openen
vochtlijstenMelding2.addEventListener("click", (e) => {
  vochtlijsten.classList.remove("active");
  vochtlijstenMeldingDetailsER.classList.add("active");
  vochtlijstenMeldingDetails.classList.remove("active");
  verbazingOverzicht.classList.remove("active");
  verbazingen.classList.remove("active");
  verbazingMelden.classList.remove("active");
});

// back to verbazingen
for (var i = 0; i < backToVerbazingen.length; i++) {
  backToVerbazingen[i].addEventListener("click", function (e) {
    verbazingMelden.classList.remove("active");
    verbazingOverzicht.classList.remove("active");
    vochtlijstenMeldingDetails.classList.remove("active");
    verbazingen.classList.add("active");
  });
}

// back to vochtlijsten overzicht
for (var i = 0; i < backToVerbazingsOverzicht.length; i++) {
  backToVerbazingsOverzicht[i].addEventListener("click", function (e) {
    verbazingen.classList.remove("active");
    verbazingMelden.classList.remove("active");
    verbazingOverzicht.classList.add("active");
    vochtlijstenMeldingDetails.classList.remove("active");
    vochtlijstenMeldingDetailsER.classList.remove("active");
  });
}

// TEMP input redirecgts
input_vl_situatie.addEventListener("click", (e) => {
  vochtlijstenMeldingDetails.classList.remove("active");
  tempInputPage.classList.add("active");

  // temp vochtlijsten inputs
  temp_vl_situatie.classList.add("active");
  temp_vl_ov.classList.remove("active");
  temp_vl_wg.classList.remove("active");
  temp_vl_ev.classList.remove("active");
});

input_vl_omschrijving_verbeteractie.addEventListener("click", (e) => {
  vochtlijstenMeldingDetails.classList.remove("active");
  tempInputPage.classList.add("active");

  // temp vochtlijsten inputs
  temp_vl_situatie.classList.remove("active");
  temp_vl_ov.classList.add("active");
  temp_vl_wg.classList.remove("active");
  temp_vl_ev.classList.remove("active");
});

input_vl_omschrijving_geslaagd.addEventListener("click", (e) => {
  vochtlijstenMeldingDetails.classList.remove("active");
  tempInputPage.classList.add("active");

  // temp vochtlijsten inputs
  temp_vl_situatie.classList.remove("active");
  temp_vl_ov.classList.remove("active");
  temp_vl_wg.classList.add("active");
  temp_vl_ev.classList.remove("active");
});

input_vl_evaluatie.addEventListener("click", (e) => {
  vochtlijstenMeldingDetails.classList.remove("active");
  tempInputPage.classList.add("active");

  // temp vochtlijsten inputs
  temp_vl_situatie.classList.remove("active");
  temp_vl_ov.classList.remove("active");
  temp_vl_wg.classList.remove("active");
  temp_vl_ev.classList.add("active");
});

//save or cancel temp input
tempInputOpslaan.addEventListener("click", (e) => {
  vochtlijstenMeldingDetails.classList.add("active");
  tempInputPage.classList.remove("active");

  // temp vochtlijsten inputs
  temp_vl_situatie.classList.remove("active");
  temp_vl_ov.classList.remove("active");
  temp_vl_wg.classList.remove("active");
  temp_vl_ev.classList.remove("active");
});

tempInputAnnuleer.addEventListener("click", (e) => {
  vochtlijstenMeldingDetails.classList.add("active");
  tempInputPage.classList.remove("active");

  // temp vochtlijsten inputs
  temp_vl_situatie.classList.remove("active");
  temp_vl_ov.classList.remove("active");
  temp_vl_wg.classList.remove("active");
  temp_vl_ev.classList.remove("active");
});

// melding 2
input_vlER_situatie.addEventListener("click", (e) => {
  vochtlijstenMeldingDetailsER.classList.remove("active");
  tempInputPageVLER.classList.add("active");

  // temp vochtlijsten inputs
  temp_vlER_situatie.classList.add("active");
  temp_vlER_ov.classList.remove("active");
  temp_vlER_wg.classList.remove("active");
  temp_vlER_ev.classList.remove("active");
});

input_vlER_omschrijving_verbeteractie.addEventListener("click", (e) => {
  vochtlijstenMeldingDetailsER.classList.remove("active");
  tempInputPageVLER.classList.add("active");

  // temp vochtlijsten inputs
  temp_vlER_situatie.classList.remove("active");
  temp_vlER_ov.classList.add("active");
  temp_vlER_wg.classList.remove("active");
  temp_vlER_ev.classList.remove("active");
});

input_vlER_omschrijving_geslaagd.addEventListener("click", (e) => {
  vochtlijstenMeldingDetailsER.classList.remove("active");
  tempInputPageVLER.classList.add("active");

  // temp vochtlijsten inputs
  temp_vlER_situatie.classList.remove("active");
  temp_vlER_ov.classList.remove("active");
  temp_vlER_wg.classList.add("active");
  temp_vlER_ev.classList.remove("active");
});

input_vlER_evaluatie.addEventListener("click", (e) => {
  vochtlijstenMeldingDetailsER.classList.remove("active");
  tempInputPageVLER.classList.add("active");

  // temp vochtlijsten inputs
  temp_vlER_situatie.classList.remove("active");
  temp_vlER_ov.classList.remove("active");
  temp_vlER_wg.classList.remove("active");
  temp_vlER_ev.classList.add("active");
});

//save or cancel temp input
tempInputOpslaanVLER.addEventListener("click", (e) => {
  vochtlijstenMeldingDetailsER.classList.add("active");
  tempInputPageVLER.classList.remove("active");

  // temp vochtlijsten inputs
  temp_vlER_situatie.classList.remove("active");
  temp_vlER_ov.classList.remove("active");
  temp_vlER_wg.classList.remove("active");
  temp_vlER_ev.classList.remove("active");
});

tempInputAnnuleerVLER.addEventListener("click", (e) => {
  vochtlijstenMeldingDetailsER.classList.add("active");
  tempInputPageVLER.classList.remove("active");

  // temp vochtlijsten inputs
  temp_vlER_situatie.classList.remove("active");
  temp_vlER_ov.classList.remove("active");
  temp_vlER_wg.classList.remove("active");
  temp_vlER_ev.classList.remove("active");
});
