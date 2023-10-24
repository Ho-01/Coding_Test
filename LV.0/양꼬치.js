/*
    Ho-01
    kimhobig@gmail.com
*/

//price
function solution(n,k){
    if(n<=0||n>=1000){
        throw console.error("ERROR : n must be in range 1~999");
    }
    if(k<Math.floor(n/10)||k>=1000){
        throw console.error("ERROR : k must be in range n/10 ~ 1000")
    }
    var service = Math.floor(n/10);
    k -= service;
    return n*12000 + k*2000;
}

console.log(solution(10,3));
console.log(solution(64,6));