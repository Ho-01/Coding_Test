/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(money){
    var out = [,];
    out[0] = Math.floor(money/5500);
    out[1] = money%5500;
    return out;
}

console.log(solution(5500));
console.log(solution(15000));