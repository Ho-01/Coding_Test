/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(arr){
    let firstIndex = arr.indexOf(2);
    if(firstIndex==-1)return [-1];
    let lastIndex = arr.lastIndexOf(2);
    return arr.slice(firstIndex,lastIndex+1);
}

console.log(solution([1, 2, 1, 4, 5, 2, 9]));
console.log(solution([1, 2, 1]));
console.log(solution([1, 1, 1]));
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1]));