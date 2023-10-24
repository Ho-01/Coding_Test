/*
    Ho-01
    kimhobig@gmail.com
*/

//averageOfArray
function solution(numbers){
    var len = numbers.length;
    var sum = 0;
    if(len<1||len>100){
        throw console.error("ERROR : length of numbers must be in range 1~100");
    }
    numbers.forEach(num => {
        if (num<0||num>1000) throw console.error("ERROR : num in array must be in range 0~1000");
        sum += num;
    });
    var result = sum/len;
    return result.toFixed(1);
}

var n1 = [1,2,3,4,5,6,7,8,9,10];
var n2 = [89,90,91,92,93,94,95,96,97,98,99];

console.log(solution(n1));
console.log(solution(n2));