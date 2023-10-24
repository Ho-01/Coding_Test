/*
    Ho-01
    kimhobig@gmail.com
*/

//sumOfEven
function solution(n){
    if(n<=0||n>1000){
        throw console.error("ERROR : n must be in range 1~1000");
    }
    var sum = 0;
    while(n>1){
        if(n%2==0) sum += n;
        --n;
    }
    return sum;
}

console.log(solution(10));
console.log(solution(4));