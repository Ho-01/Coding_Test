/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(numbers){
    if(numbers.length<2||numbers.length>100){
        throw console.error("ERROR");
    }
    var biggest = 0;
    var next_biggest = 0;
    numbers.forEach( n => {
        if(n>biggest){
            next_biggest = biggest;
            biggest = n;
        }
        else if(n>next_biggest)next_biggest=n;
    });
    return biggest*next_biggest;
}

console.log(solution([1,2,3,4,5]));
console.log(solution([0,31,24,10,1,9]));