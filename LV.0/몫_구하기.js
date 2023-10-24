/*
    Ho-01
    kimhobig@gmail.com
*/

//quotient
function solution(num1, num2){
    if(num1<=0||num1>100||num2<=0||num2>100){
        throw console.error("ERROR : num1 & num2 must be in range 1~100");
    }
    return Math.floor(num1/num2);
}

console.log(solution(10,5));
console.log(solution(7,2));