// Challenge #06 Vowel Count:-
function getCount(str) {
    var vowel=0;
    for(var i=0;i<str.length;i++){
      if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
        vowel+=1;
      }
    }
    return vowel;
}