var isInArray = function(target, arr) {
    var que = [];
    for(var i =0; i < arr.length; i++)
        if(target == arr[i]) que.push(arr[i]);
    if(que.length > 0)
        return 1;
    else 
        return 0;
};

var getUnique = function(arr) {
    var que = [];
    for(var i = 0; i < arr.length; i++) {
        for(var j = i + 1; j < arr.length; j++) {
          if(arr[i] === arr[j]) j = ++i;
        }
        que.push(arr[i]);
    }
    return que;
};

var getDuplicate = function(arr) {
    var que = []; 
    for(var i = 0; i < arr.length; i++) {
        for(var j = i + 1; j < arr.length; j++) {
          if(arr[i] === arr[j]){
            j = ++i;
            que.push(arr[i]);
          }
        }  
    }
    return getUnique(que);
};

var arr2lse = function(arr_domain, arr_val){
  if(arr_domain.length != arr_val.length) return 0;
  for(var i=0; i< arr_domain.length; i++){
      localStorage.setItem(arr_domain[i], arr_val[i]);
  }
  return 1;
};

var desc = function(x,y) {
	if (x > y) 
	return -1;
	if (x < y) 
	return 1;
};

var asc = function(x,y) {
	if (x > y) 
	return 1;
	if (x < y) 
	return -1;
};