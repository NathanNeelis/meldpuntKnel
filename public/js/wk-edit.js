const wk_overzicht = document.querySelector(".oz-wk-wrapper");
const wk_overzicht_edit = document.querySelector(".oz-wk-edit-wrapper");
const wk_edit_btn = document.querySelector(".submitEditForm");

wk_overzicht.addEventListener("click", (e) => {
  wk_overzicht.classList.remove("active");
  wk_overzicht_edit.classList.add("active");
});

wk_edit_btn.addEventListener("click", (e) => {
  wk_overzicht.classList.add("active");
  wk_overzicht_edit.classList.remove("active");
});

const minusBedden = document.querySelector(".minus");
const plusBedden = document.querySelector(".plus");
const totaalBedden = document.querySelector("#totaalBeddenInput");

minusBedden.addEventListener("click", (e) => {
  const total = parseInt(totaalBedden.value);
  totaalBedden.value = total - 1;
});

plusBedden.addEventListener("click", (e) => {
  const total = parseInt(totaalBedden.value);
  totaalBedden.value = total + 1;
});

const opnameWrapper = document.getElementById("opname-usericons-wrapper");
const minusOpname = document.querySelectorAll(".ono");
const plusOpname = document.querySelector(".addOno");
const totaalOpname = document.querySelector("#totaalOpnameInput");
let opnameLenght = minusOpname.length;

for (var i = 0; i < minusOpname.length; i++) {
  minusOpname[i].addEventListener("click", function (e) {
    const element = minusOpname[0];
    console.log("element", minusOpname[0]);
    element.remove();
    totaalOpname.value = parseInt(totaalOpname.value) - 1;
  });
}

plusOpname.addEventListener("click", (e) => {
  totaalOpname.value = parseInt(totaalOpname.value) + 1;
  opnameLenght++;
  opnameCheck = opnameLenght;

  renderIcon(opnameWrapper, opnameCheck);
});

function renderIcon(section, check) {
  if (check === 5) {
    const button = plusOpname;
    button.remove();
  }

  let element = document.createElement("div");
  element.className = "ono";

  section.appendChild(element);
}

const ontslagWrapper = document.getElementById("ontslag-usericons-wrapper");
const minusOntslag = document.querySelectorAll(".opo");
const plusOntslag = document.querySelector(".addOpo");
const totaalOntslag = document.querySelector("#totaalOntslagInput");
let ontslagLength = minusOntslag.length;

for (var i = 0; i < minusOntslag.length; i++) {
  minusOntslag[i].addEventListener("click", function (e) {
    const element = minusOntslag[0];
    element.remove();
    totaalOntslag.value = parseInt(totaalOntslag.value) - 1;
  });
}

plusOntslag.addEventListener("click", (e) => {
  totaalOntslag.value = parseInt(totaalOntslag.value) + 1;
  ontslagLength++;
  ontslagCheck = ontslagLength;

  renderIconOntslag(ontslagWrapper, ontslagCheck);
});

function renderIconOntslag(section, check) {
  if (check === 5) {
    const button = plusOntslag;
    button.remove();
  }

  let element = document.createElement("div");
  element.className = "opo";

  section.appendChild(element);
}
