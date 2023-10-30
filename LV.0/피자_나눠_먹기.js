/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(slice,n){
    if(slice<2||slice>10){
        throw console.error("ERROR : slice must be in range 2~10");
    }
    if(n<1||n>100){
        throw console.error("ERROR : n must be in range 1~100");
    }
    return Math.ceil(n/slice);
}

console.log(solution(7,10));
console.log(solution(4,12));