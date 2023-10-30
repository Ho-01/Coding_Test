/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(numbers,num1,num2){
    if(numbers.length<2||numbers.length>30){
        throw console.error("ERROR : numbers.length must be in range 2~30");
    }
    var output = [];
    for(var i=num1 ;  i<=num2 ; i++){
        output.push(numbers[i]);
    }
    return output;
}

console.log(solution([1,2,3,4,5],1,3));
console.log(solution([1,3,5],1,2));