/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(myString, pat){
    var l = pat.length;
    var count = 0;
    for(var i=0 ; i<myString.length-(l-1) ; i++){
        if(myString.substr(i,l)==pat){
            count++;
        }
    }
    return count;
}

console.log(solution("banana","ana"));
console.log(solution("aaaa","aa"));