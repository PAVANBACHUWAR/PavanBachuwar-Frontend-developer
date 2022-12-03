const formatDateForCapsules = (utcDate) => {
    const date = new Date(utcDate);
    return date.getUTCDate();
  };

const formatYearForCapsules = (utcDate) => {
    const date = new Date(utcDate);
    return date.getUTCFullYear();
};

const formatMonthForCapsules  = (utcDate) => {
    const date = new Date(utcDate);
    const dateMonth = date.getUTCMonth()
    let month;
  
    switch (dateMonth) {
      default:
      case 0:
        month = "JAN";
        break;
      case 1:
        month = "FEB";
        break;
      case 2:
        month = "MAR";
        break;
      case 3:
        month = "APR";
        break;
      case 4:
        month = "MAY";
        break;
      case 5:
        month = "JUN";
        break;
      case 6:
        month = "JUL";
        break;
      case 7:
        month = "AUG";
        break;
      case 8:
        month = "SEP";
        break;
      case 9:
        month = "OCT";
        break;
      case 10:
        month = "NOV";
        break;
      case 11:
        month = "DEC";
        break;
    }
    return month;
}

const formatDate = (unixDate) => {
    const date = new Date(unixDate * 1000);
    return `${getMonth(date.getMonth + 1)} ${date.getFullYear()}`;
  };
  
  const formatFullDate = (unixDate) => {
    const date = new Date(unixDate * 1000);
    return `${date.getDate()} ${getMonth(
      date.getMonth + 1
    )} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()} UTC`;
  };
  
  const getMonth = (monthNum) => {
    let month;
  
    switch (monthNum) {
      default:
      case 1:
        month = "January";
        break;
      case 2:
        month = "February";
        break;
      case 3:
        month = "March";
        break;
      case 4:
        month = "April";
        break;
      case 5:
        month = "May";
        break;
      case 6:
        month = "June";
        break;
      case 7:
        month = "July";
        break;
      case 8:
        month = "August";
        break;
      case 9:
        month = "September";
        break;
      case 10:
        month = "October";
        break;
      case 11:
        month = "November";
        break;
      case 12:
        month = "December";
        break;
    }
    return month;
  };
  
  
  export { formatDate, formatFullDate, formatDateForCapsules, formatYearForCapsules, formatMonthForCapsules };