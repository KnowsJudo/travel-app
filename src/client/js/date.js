/*-- Functionality and logic for processing Date related Info --*/

// Length of a day in milliseconds
const day = 24 * 60 * 60 * 1000;

// Returns the difference between two dates
const calculateDateDifference = (date1, date2 = new Date().valueOf()) => {
  const startDate = new Date(date2);
  const diffTime = Math.abs(new Date(date1) - startDate);
  const diffDays = Math.ceil(diffTime / day);
  return diffDays;
};

// Returns the values of Year, Month and Date
const convertDateToBits = (inputDate) => {
  const year = inputDate.getFullYear();
  const month = inputDate.getMonth() + 1;
  const date = inputDate.getDate();

  return {
    year: `${year}`,
    month: `${month < 10 ? "0" : ""}${month}`,
    date: `${date < 10 ? "0" : ""}${date}`,
  };
};

// Returns the day of the Week
const toDayName = (day) => {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
};

export { calculateDateDifference, convertDateToBits, toDayName };
