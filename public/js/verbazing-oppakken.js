const btnOppakken = document.querySelector(".btn-rp-oppakken1");
const statusText = document.querySelector(".verb-rp-status-text");
const verantwoordelijkeVerbazing = document.querySelector(
  ".verb-rp-verantwoordelijke"
);

const rp_verantwoordelijke_user = document.querySelector(
  ".verb-rp-verantwoordelijke-user"
);
const rp_verantwoordlijke_input = document.querySelector(
  "#rp-verantwoordelijke"
);
const rp_niemand = document.querySelector(".rp-niemand");
const btnIemandToevoegen = document.querySelector(".verantwoordelijkeBtn-rp");

const btnOppakkenDetails = document.querySelector(".btn-rp-oppakken2");
const btnBespreken = document.querySelector(".cta-nieuw-rp");
const statusTextDetails = document.querySelector(".rp-melding1-status");
const verantwoordelijkeDetails = document.querySelector(
  ".verb-rp-verantwoordelijke-details"
);

const statusHeaderNieuw = document.querySelector(".meta-status-nieuw-rp");
const statusHeaderOpgepakt = document.querySelector(".meta-status-opgepakt-rp");
const statusHeaderNieuwDetails = document.querySelector(
  ".meta-status-nieuw-rp2"
);
const statusHeaderOpgepaktDetails = document.querySelector(
  ".meta-status-opgepakt-rp2"
);
const statusHeader = document.querySelector(".verb-active-header");

// MELDING BOVEN VERBAZINGEN
const melding = document.querySelector(".verb-notification-text");

btnOppakken.addEventListener("click", (e) => {
  verantwoordelijkStellen();
  rapportagesBesprekenMeldingDetails.classList.remove("active");
  verbazingOverzichtRP.classList.add("active");
});

btnOppakkenDetails.addEventListener("click", (e) => {
  verantwoordelijkStellen();
});

btnIemandToevoegen.addEventListener("click", (e) => {
  verantwoordelijkStellen();
});

function verantwoordelijkStellen() {
  verantwoordelijkeVerbazing.innerHTML = "NN";
  verantwoordelijkeDetails.innerHTML = "NN";
  rp_verantwoordelijke_user.innerHTML = "NN";
  rp_verantwoordlijke_input.value = "Nathan Neelis";
  statusTextDetails.innerHTML = "opgepakt";
  statusText.innerHTML = "opgepakt";
  btnOppakken.classList.add("inactive");
  btnOppakkenDetails.classList.add("inactive");
  btnBespreken.classList.add("inactive");
  statusHeader.classList.remove("unknownUser");

  statusHeaderNieuw.classList.remove("status-active");
  statusHeaderNieuw.classList.add("status-voltooid");
  statusHeaderOpgepakt.classList.remove("status-onvoltooid");
  statusHeaderOpgepakt.classList.add("status-active");

  statusHeaderNieuwDetails.classList.remove("status-active");
  statusHeaderNieuwDetails.classList.add("status-voltooid");
  statusHeaderOpgepaktDetails.classList.remove("status-onvoltooid");
  statusHeaderOpgepaktDetails.classList.add("status-active");

  rp_niemand.classList.remove("inactive");
  melding.innerHTML = "Alle verbazingen worden verbeterd!";
}
