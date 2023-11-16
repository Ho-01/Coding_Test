/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(arr, queries){
    let temp;
    queries.forEach( query =>{
        temp = arr[query[0]];
        arr[query[0]] = arr[query[1]];
        arr[query[1]] = temp;        
    })
    return arr;
}

console.log(solution([0, 1, 2, 3, 4],[[0, 3],[1, 2],[1, 4]]));