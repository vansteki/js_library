var patchZero = function(num, offset) {
  var min = Math.pow(10, offset-1)
  var tmp = num;
  while(tmp < min) {
    num = "0"+num;
    tmp *= 10;
  }
  return num;
};