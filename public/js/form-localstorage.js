const storage = window.localStorage;
// local storage depots
let localStorageSituatie = localStorage.getItem("situatie");
let localStorageVerbeteractie = localStorage.getItem("verbeteractie");
let localStorageDoel = localStorage.getItem("doel");
let localStorageEvaluatie = localStorage.getItem("evaluatie");

// toggle vochtlisjten
const vl_nn_opgelost = document.querySelector("#vl-nn-opgelost");
const vl_nn_opgelost_text = document.querySelector(".vl-nn-opgelost-text");
let localStorageOpgelost = localStorage.getItem("opgelost");

const vl_nn_vermelden = document.querySelector("#vl-nn-vermelden");
const vl_nn_vermelden_text = document.querySelector(".vl-nn-vermelden-text");
let localStorageVermelden = localStorage.getItem("vermelden");

// toggle rapportages bespreken
const rp_nn_opgelost = document.querySelector("#rp-nn-opgelost");
const rp_nn_opgelost_text = document.querySelector(".rp-nn-opgelost-text");
let localStorageOpgelostRP = localStorage.getItem("opgelost_rp");

const rp_nn_vermelden = document.querySelector("#rp-nn-vermelden");
const rp_nn_vermelden_text = document.querySelector(".rp-nn-vermelden-text");
let localStorageVermeldenRP = localStorage.getItem("vermelden_rp");

// local storages
let localStorageSituatie_ER = localStorage.getItem("situatie_er");
let localStorageVerbeteractie_ER = localStorage.getItem("verbeteractie_er");
let localStorageDoel_ER = localStorage.getItem("doel_er");
let localStorageEvaluatie_ER = localStorage.getItem("evaluatie_er");

let localStorageSituatie_RP = localStorage.getItem("situatie_rp");
let localStorageVerbeteractie_RP = localStorage.getItem("verbeteractie_rp");
let localStorageDoel_RP = localStorage.getItem("doel_rp");
let localStorageEvaluatie_RP = localStorage.getItem("evaluatie_rp");

// original inputs and temp inputs refered to in verbazingenmelden.js

// if statements
if (localStorageSituatie !== null) {
  input_vl_situatie.value = localStorageSituatie;
  temp_vl_situatie.value = localStorageSituatie;
}

if (localStorageVerbeteractie !== null) {
  input_vl_omschrijving_verbeteractie.value = localStorageVerbeteractie;
  temp_vl_ov.value = localStorageVerbeteractie;
}

if (localStorageDoel !== null) {
  input_vl_omschrijving_geslaagd.value = localStorageDoel;
  temp_vl_wg.value = localStorageDoel;
}

if (localStorageEvaluatie !== null) {
  input_vl_evaluatie.value = localStorageEvaluatie;
  temp_vl_ev.value = localStorageEvaluatie;
}

// toggles
if (localStorageOpgelost !== null) {
  if (localStorageOpgelost === "true") {
    vl_nn_opgelost.checked = true;
  } else if (localStorageOpgelost === "false") {
    vl_nn_opgelost.checked = false;
  }

  if (vl_nn_opgelost.checked === true) {
    vl_nn_opgelost_text.innerHTML = "Ja de verbazing is opgelost";
  } else if (vl_nn_opgelost.checked === false) {
    vl_nn_opgelost_text.innerHTML = "Nee de verbazing is niet opgelost";
  }
}

if (localStorageVermelden !== null) {
  if (localStorageVermelden === "true") {
    vl_nn_vermelden.checked = true;
  } else if (localStorageVermelden === "false") {
    vl_nn_vermelden.checked = false;
  }

  if (vl_nn_vermelden.checked === true) {
    vl_nn_vermelden_text.innerHTML = "Wel";
  } else if (vl_nn_vermelden.checked === false) {
    vl_nn_vermelden_text.innerHTML = "Niet";
  }
}

// toggles rp
if (localStorageOpgelostRP !== null) {
  if (localStorageOpgelostRP === "true") {
    rp_nn_opgelost.checked = true;
  } else if (localStorageOpgelostRP === "false") {
    rp_nn_opgelost.checked = false;
  }

  if (rp_nn_opgelost.checked === true) {
    rp_nn_opgelost_text.innerHTML = "Ja de verbazing is opgelost";
  } else if (rp_nn_opgelost.checked === false) {
    rp_nn_opgelost_text.innerHTML = "Nee de verbazing is niet opgelost";
  }
}

if (localStorageVermeldenRP !== null) {
  if (localStorageVermeldenRP === "true") {
    rp_nn_vermelden.checked = true;
  } else if (localStorageVermeldenRP === "false") {
    rp_nn_vermelden.checked = false;
  }

  if (rp_nn_vermelden.checked === true) {
    rp_nn_vermelden_text.innerHTML = "Wel";
  } else if (rp_nn_vermelden.checked === false) {
    rp_nn_vermelden_text.innerHTML = "Niet";
  }
}

// melding 2

if (localStorageSituatie_ER !== null) {
  input_vlER_situatie.value = localStorageSituatie_ER;
  temp_vlER_situatie.value = localStorageSituatie_ER;
}

if (localStorageVerbeteractie_ER !== null) {
  input_vlER_omschrijving_verbeteractie.value = localStorageVerbeteractie_ER;
  temp_vlER_ov.value = localStorageVerbeteractie_ER;
}

if (localStorageDoel_ER !== null) {
  input_vlER_omschrijving_geslaagd.value = localStorageDoel_ER;
  temp_vlER_wg.value = localStorageDoel_ER;
}

if (localStorageEvaluatie_ER !== null) {
  input_vlER_evaluatie.value = localStorageEvaluatie_ER;
  temp_vlER_ev.value = localStorageEvaluatie_ER;
}

// melding rapportages bespreken

if (localStorageSituatie_RP !== null) {
  input_rp_situatie.value = localStorageSituatie_RP;
  temp_rp_situatie.value = localStorageSituatie_RP;
}

if (localStorageVerbeteractie_RP !== null) {
  input_rp_omschrijving_verbeteractie.value = localStorageVerbeteractie_RP;
  temp_rp_ov.value = localStorageVerbeteractie_RP;
}

if (localStorageDoel_RP !== null) {
  input_rp_omschrijving_geslaagd.value = localStorageDoel_RP;
  temp_rp_wg.value = localStorageDoel_RP;
}

if (localStorageEvaluatie_ER !== null) {
  input_rp_evaluatie.value = localStorageEvaluatie_RP;
  temp_rp_ev.value = localStorageEvaluatie_RP;
}

// event listeners
temp_vl_situatie.addEventListener("input", (e) => {
  storage.setItem("situatie", e.target.value);
  input_vl_situatie.value = e.target.value;
});

temp_vl_ov.addEventListener("input", (e) => {
  storage.setItem("verbeteractie", e.target.value);
  input_vl_omschrijving_verbeteractie.value = e.target.value;
});

temp_vl_wg.addEventListener("input", (e) => {
  storage.setItem("doel", e.target.value);
  input_vl_omschrijving_geslaagd.value = e.target.value;
});

temp_vl_ev.addEventListener("input", (e) => {
  storage.setItem("evaluatie", e.target.value);
  input_vl_evaluatie.value = e.target.value;
});

// melding  2
temp_vlER_situatie.addEventListener("input", (e) => {
  storage.setItem("situatie_er", e.target.value);
  input_vlER_situatie.value = e.target.value;
});

temp_vlER_ov.addEventListener("input", (e) => {
  storage.setItem("verbeteractie_er", e.target.value);
  input_vlER_omschrijving_verbeteractie.value = e.target.value;
});

temp_vlER_wg.addEventListener("input", (e) => {
  storage.setItem("doel_er", e.target.value);
  input_vlER_omschrijving_geslaagd.value = e.target.value;
});

temp_vlER_ev.addEventListener("input", (e) => {
  storage.setItem("evaluatie_er", e.target.value);
  input_vlER_evaluatie.value = e.target.value;
});

// melding  rapporages bespreken
temp_rp_situatie.addEventListener("input", (e) => {
  storage.setItem("situatie_rp", e.target.value);
  input_rp_situatie.value = e.target.value;
});

temp_rp_ov.addEventListener("input", (e) => {
  storage.setItem("verbeteractie_rp", e.target.value);
  input_rp_omschrijving_verbeteractie.value = e.target.value;
});

temp_rp_wg.addEventListener("input", (e) => {
  storage.setItem("doel_rp", e.target.value);
  input_rp_omschrijving_geslaagd.value = e.target.value;
});

temp_rp_ev.addEventListener("input", (e) => {
  storage.setItem("evaluatie_rp", e.target.value);
  input_rp_evaluatie.value = e.target.value;
});

// overige
vl_nn_opgelost.addEventListener("input", (e) => {
  storage.setItem("opgelost", e.target.checked);

  if (vl_nn_opgelost.checked === true) {
    vl_nn_opgelost_text.innerHTML = "Ja de verbazing is opgelost";
  } else {
    vl_nn_opgelost_text.innerHTML = "Nee de verbazing is niet opgelost";
  }
});

vl_nn_vermelden.addEventListener("input", (e) => {
  storage.setItem("vermelden", e.target.checked);

  if (vl_nn_vermelden.checked === true) {
    vl_nn_vermelden_text.innerHTML = "Wel";
  } else {
    vl_nn_vermelden_text.innerHTML = "Niet";
  }
});

// overige rapportages bespreken
rp_nn_opgelost.addEventListener("input", (e) => {
  storage.setItem("opgelost_rp", e.target.checked);

  if (rp_nn_opgelost.checked === true) {
    rp_nn_opgelost_text.innerHTML = "Ja de verbazing is opgelost";
  } else {
    rp_nn_opgelost_text.innerHTML = "Nee de verbazing is niet opgelost";
  }
});

rp_nn_vermelden.addEventListener("input", (e) => {
  storage.setItem("vermelden_rp", e.target.checked);

  if (rp_nn_vermelden.checked === true) {
    rp_nn_vermelden_text.innerHTML = "Wel";
  } else {
    rp_nn_vermelden_text.innerHTML = "Niet";
  }
});
