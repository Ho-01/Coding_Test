/*
    Ho-01
    kimhobig@gmail.com
*/

//sum
function solution(num1,num2){
    if(num1<-50000||num1>50000||num2<-50000||num2>50000){
        throw console.error("ERROR : num1 & num2 must be in range -50000~50000");
    }
    return num1+num2;
}

console.log(solution(2,3));
console.log(solution(100,2));