// Challenge #05 Counting Sheep:-
function countSheeps(sheep) {
    // TODO
    var n=0;
    for(var i=0;i<sheep.length;i++){
      if(sheep[i]==true){
        n=n+1;
      }
    }
    return n;
}