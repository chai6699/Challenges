// Challenge #24 Cat and Dog years:-
var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    var c = 0;
     var d = 0;
     for (var i = 1; i <= humanYears; i++) {
        if (i === 1) {
           c += 15;
           d += 15;
        }else if (i === 2) {
           c += 9;
           d += 9;
        }else {
           c += 4;
           d += 5;
        }
     }
     return [humanYears, c, d];
}