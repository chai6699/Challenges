// Challenge #12 Avg of array:-
function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    var s=0;
    for(var i=0;i<marks.length;i++){s+=marks[i];}
    return Math.floor(s/marks.length);
}