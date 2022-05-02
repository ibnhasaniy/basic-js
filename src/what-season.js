const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // error sender
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if ({}.toString.call(date) !== "[object Date]") {
    throw new Error("Invalid date!");
  }
  // main
  let month = date.getMonth();
  const season = [
    "winter",
    "winter",
    "spring",
    "spring",
    "spring",
    "summer",
    "summer",
    "summer",
    "autumn",
    "autumn",
    "autumn",
    "winter",
  ];
  return season[month];
}

module.exports = {
  getSeason,
};
