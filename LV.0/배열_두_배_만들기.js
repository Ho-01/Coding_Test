/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(numbers){
    var len = numbers.length;
    if(len<1||len>1000){
        throw console.error("ERROR : numbers.length must be in range 1~1000");
    }
    var output = [];
    numbers.forEach( num =>{
        if(num<-10000||num>10000){
            throw console.error("ERROR : num in numbers must be in range -10000~10000");
        }
        output.push(num*2);
    });
    return output;
}

var a1 = [1,2,3,4,5];
var a2 = [1,2,100,-99,1,2,3];

console.log(solution(a1));
console.log(solution(a2));