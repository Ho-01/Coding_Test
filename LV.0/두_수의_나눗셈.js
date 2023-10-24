/*
    Ho-01
    kimhobig@gmail.com
*/

//division
function solution(num1,num2){
    if(num1<=0||num1>100||num2<=0||num2>100){
    throw console.error("ERROR : nun1 & num2 must be in range 1~100");
    }
    return Math.floor(num1/num2*1000);
}

console.log(solution(3,2));
console.log(solution(7,3));
console.log(solution(1,16));