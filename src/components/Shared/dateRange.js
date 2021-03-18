const formatDaysAndMonth = (dateDays, dateMonth, dateYear) => {
  // date formatting for chart.js api
  if (dateDays < 10) {
    dateDays = "0" + dateDays;
  }
  if (dateMonth < 10) {
    dateMonth = "0" + dateMonth;
  }

  return dateYear + "-" + dateMonth + "-" + dateDays;
}

const dateRange = (days) => {
  // end date
  let endDate = new Date();
  let endDateDays = endDate.getDate();
  let endDateMonth = endDate.getMonth() + 1;
  let endDateYear = endDate.getFullYear();

  endDate = formatDaysAndMonth(endDateDays, endDateMonth, endDateYear);

  // start date
  var startDate = new Date();
  startDate.setDate(startDate.getDate() - days);
  let startDateDays = startDate.getDate();
  let startDateMonth = startDate.getMonth() + 1;
  let startDateYear = startDate.getFullYear();

  startDate = formatDaysAndMonth(startDateDays, startDateMonth, startDateYear);

  return {
      startDate, endDate
  }
}

export default dateRange;
