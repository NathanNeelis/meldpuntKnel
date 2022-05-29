const storage = window.localStorage;
// local storage depots
let localStorageSituatie = localStorage.getItem("situatie");
let localStorageVerbeteractie = localStorage.getItem("verbeteractie");
let localStorageDoel = localStorage.getItem("doel");
let localStorageEvaluatie = localStorage.getItem("evaluatie");

let localStorageSituatie_ER = localStorage.getItem("situatie_er");
let localStorageVerbeteractie_ER = localStorage.getItem("verbeteractie_er");
let localStorageDoel_ER = localStorage.getItem("doel_er");
let localStorageEvaluatie_ER = localStorage.getItem("evaluatie_er");

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
