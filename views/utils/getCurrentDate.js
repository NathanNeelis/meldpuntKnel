function currentDate() {
  const today = new Date();
  const currentMonth = getFullMonth(today.getMonth() + 1);
  const date = today.getDate() + " " + currentMonth + " " + today.getFullYear();
  return date;
}

module.exports = currentDate;

function getFullMonth(month) {
  if (month === 1) {
    return "januari";
  } else if (month === 2) {
    return "februari";
  } else if (month === 3) {
    return "maart";
  } else if (month === 4) {
    return "april";
  } else if (month === 5) {
    return "mei";
  } else if (month === 6) {
    return "juni";
  } else if (month === 7) {
    return "juli";
  } else if (month === 8) {
    return "augustus";
  } else if (month === 9) {
    return "september";
  } else if (month === 10) {
    return "oktober";
  } else if (month === 11) {
    return "november";
  } else if (month === 12) {
    return "december";
  }
}
