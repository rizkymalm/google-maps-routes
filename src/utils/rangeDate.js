import moment from "moment";

export function rangeDate(endDate) {
  const startDateMoment = moment(endDate).subtract(7, "d");
  const endDateMoment = moment(endDate);
  const dates = [];

  let currentDateMoment = startDateMoment;
  while (currentDateMoment.isSameOrBefore(endDateMoment)) {
    dates.push(currentDateMoment.toDate()); // Convert to Date object
    currentDateMoment.add(1, "day"); // Increment date by 1 day
  }
  return dates;
}

export function dateAgo(date, subtract) {
  const result = moment(date).subtract(subtract, "d");
  return result;
}

export function dateNextWeek(date, add) {
  const result = moment(date).add(add, "w");
  return result;
}
