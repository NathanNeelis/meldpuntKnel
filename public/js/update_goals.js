let dailyPercentage = document.querySelector(".pc");
let chart = document.querySelector(".beddenData");
// let weeklyPercentage = document.querySelector(".weeklyValue");
// let weeklyChart = document.querySelector(".weeklygoal");

if (dailyPercentage) {
  chart.style.setProperty(
    "--beddenPercentage",
    calculateP(parseInt(dailyPercentage.innerHTML, 10))
  );
}

function calculateP(bedden) {
  const totaalBedden = 0.23;

  const percentage = Math.round(bedden / totaalBedden);
  const result = percentage + "%";

  return result;
}

// Register css properties
CSS.registerProperty({
  name: "--pos",
  syntax: "<length-percentage>",
  initialValue: "0%",
  inherits: true,
});

CSS.registerProperty({
  name: "--c0",
  syntax: "<color>",
  initialValue: "#ffffff",
  inherits: true,
});

CSS.registerProperty({
  name: "--c1",
  syntax: "<color>",
  initialValue: "#2f478f",
  inherits: true,
});
