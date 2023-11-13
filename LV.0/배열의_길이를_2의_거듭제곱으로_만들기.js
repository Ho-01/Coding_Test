/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(arr){
    let desiredLength = 2**Math.ceil(Math.log2(arr.length));
    const numberOfZero = desiredLength-arr.length;
    for(let i=0 ; i<numberOfZero ; i++){
        arr.push(0);
    }
    return arr;    
}

console.log(solution([1,2,3,4,5,6]));
console.log(solution([58,172,746,89]));