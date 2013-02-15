var fromDateToTimestamp = function(date) {
  return Date.parse(date) / 1000;
};

var fromTimestampToDate = function(timestamp) {
  var date = new Date((timestamp.length==10)?timestamp*=1000:timestamp);
  return date.getFullYear()+"/"+
  (date.getMonth()+1)+"/"+
  date.getDate();
};

var daysInMonth = function(year, month) {
  return new Date(year, month, 0).getDate();
};

var sleep = function (milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
};
