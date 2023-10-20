/*
    Ho-01
    kimhobig@gmail.com
*/

//remainder
function solution(num1, num2){
    if(!(num1>0&&num1<=100)||!(num2>0&&num2<=100)){
        throw(console.error("num1 and num2 must be in range 1~100"));
    }
    return num1%num2;
}

console.log(solution(3,2));
console.log(solution(10,5));