/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(array, height){
    var len = array.length;
    if(len<1||len>100){
        throw console.error("ERROR : array must be in range 1~100");
    }
    if(height<1||height>200){
        throw console.error("ERROR : height must be in range 1~200");
    }
    var count = 0;
    array.forEach( h => {
        if(h<1||h>200){
            throw console.error("ERROR : h in array must be in range 1~200");
        }
        if(h>height) count++;
    });
    return count;
}

var a1 = [149,180,192,170];
var a2 = [180,120,140];

console.log(solution(a1,167));
console.log(solution(a2,190));