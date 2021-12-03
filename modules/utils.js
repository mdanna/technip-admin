const utils = {

  getReadableWeekday(input){
    let weekday = "";
    switch(input) {
      case 0:
        weekday = 'Sunday';
        break;
      case 1:
        weekday = 'Monday';
        break;
      case 2:
        weekday = 'Tuesday';
        break;
      case 3:
        weekday = 'Wednesday';
        break;
      case 4:
        weekday = 'Thursday';
        break;
      case 5:
        weekday = 'Friday';
        break;
      case 6:
        weekday = 'Saturday';
        break;
      default:
        weekday = 'Sunday';
        break;
    }
    return weekday;
  },
  
  getReadableMonth(input){
    let month = "";
      switch(input) {
        case 0:
          month = 'January';
          break;
        case 1:
          month = 'February';
          break;
        case 2:
          month = 'March';
          break;
        case 3:
          month = 'April';
          break;
        case 4:
          month = 'May';
          break;
        case 5:
          month = 'June';
          break;
        case 6:
          month = 'July';
          break;
        case 7:
          month = 'August';
          break;
        case 8:
          month = 'September';
          break;
        case 9:
          month = 'October';
          break;
        case 10:
          month = 'November';
          break;
        case 11:
          month = 'December';
          break;
        default:
          break;
      }
    return month;
  },
  
  formatTimeNumber(input){
    input = input + '';
    return input.length === 1 ? `0${input}` : input;
  }
};