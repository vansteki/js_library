var isInArray = function(target, arr) {
    var que = [];
    for(var i =0; i < arr.length; i++)
        if(target == arr[i]) que.push(arr[i]);
    if(que.length > 0)
        return true;
    else 
        return false;
};
