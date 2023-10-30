/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(n,t){
    var result = n;
    for(var i=0 ; i<t ; i++){
        result = result*2;
    }
    return result;
}

console.log(solution(2,10));
console.log(solution(7,15));