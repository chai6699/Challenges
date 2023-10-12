// Challenge #10 Smallest integer in the array:-
class SmallestIntegerFinder {
    findSmallestInt(args) {
      var m=args[0];
      for(var i=1;i<args.length;i++){
        if(args[i]<m){m=args[i];}
      }
      return m;
    }
}