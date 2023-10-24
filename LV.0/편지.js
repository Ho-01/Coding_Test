/*
    Ho-01
    kimhobig@gmail.com
*/

//letter
function solution(message){
    var len = message.length;
    if(len<1||len>50){
        throw console.error("ERROR : message length must be in range 1~50");
    }
    return len*2;
}

console.log(solution("happy birthday!"));
console.log(solution("I love you~"));