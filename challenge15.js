// Challenge #15 Sum of Postive:-
function positiveSum(arr) {
    var s=0;
    for(var i=0;i<arr.length;i++){
      if(arr[i]>0){s+=arr[i];}
    }
    return s;
}