var isInArray = function(target, arr) {
    var que = [];
    for(var i =0; i < arr.length; i++)
        if(target == arr[i]) que.push(arr[i]);
    if(que.length > 0)
        return true;
    else 
        return false;
};

var unique = function(arr) {
    var que = [];
    for(var i = 0; i < arr.length; i++) {
        for(var j = i + 1; j < arr.length; j++) {
          if(arr[i] === arr[j]) j = ++i;
        }
        que.push(arr[i]);
    }
    return que;
};

var arr2lse = function(n,arr_domain, arr_val){
    for(var i=0; i<n; i++){
        localStorage.setItem(arr_domain[i], arr_val[i]);
    }
};
