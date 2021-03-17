const dateRange = (days) => {
    // get date strings
  let endDate = new Date();
  let dd = endDate.getDate();
  let mm = endDate.getMonth() + 1;
  let yyyy = endDate.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  endDate = yyyy + "-" + mm + "-" + dd;

  let startDate = new Date();
  let dd1w = startDate.getDate() - days;
  let mm1w = startDate.getMonth() + 1;
  let yyyy1w = startDate.getFullYear();

  if (dd1w < 10) {
    dd1w = "0" + dd1w;
  }
  if (mm1w < 10) {
    mm1w = "0" + mm1w;
  }

  startDate = yyyy1w + "-" + mm1w + "-" + dd1w;

  return{
      startDate, endDate
  }
}

export default dateRange;
