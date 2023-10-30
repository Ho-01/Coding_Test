/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(array,n){
    if(array.length<1||array.length>100||n<0||n>1000){
        throw console.error("ERROR : array.length or n value is invalid");
    }
    var count = 0;
    array.forEach( e => {
        if(e==n)count++
    });
    return count;
}

console.log(solution([1,1,2,3,4,5],1));
console.log(solution([0,2,3,4],1));