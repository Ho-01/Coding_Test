/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(array){
    let count = 0;
    array.join("").split("").forEach( char =>{
        if(char == "7")count++;
    });
    return count;
}

console.log(solution([7,77,17]));
console.log(solution([10,29]));