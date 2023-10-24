/*
    Ho-01
    kimhobig@gmail.com
*/

//pizza
function solution(n){
    if(n<1||n>100){
        throw console.error("ERROR : n must be in range 1~100");
    }
    return Math.ceil(n/7);
}

console.log(solution(7));
console.log(solution(1));
console.log(solution(15));