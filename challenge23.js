// Challenge #23 Century from year:-
function century(year) {
    // Finish this :)
    var a=year/100;
    if ((a*100)>Math.floor(a)*100){return Math.floor(year/100)+1}
    return Math.floor(year/100);
}