/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(n){
    if(n<0||n>1000000){
        throw console.error("ERROR : n must be in range 0~1000000");
    }
    var sum = 0;
    while(n!=0){
        sum += n%10;
        n = Math.floor(n/10);
    }
    return sum;
}

console.log(solution(1234));
console.log(solution(930211));