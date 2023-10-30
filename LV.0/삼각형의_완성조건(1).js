/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(sides){
    if(sides[0]+sides[1]<=sides[2])return 2;
    else if(sides[1]+sides[2]<=sides[0])return 2;
    else if(sides[2]+sides[0]<=sides[1])return 2;
    else return 1;
}

console.log(solution([1,2,3]));
console.log(solution([3,6,2]));
console.log(solution([199,72,222]));