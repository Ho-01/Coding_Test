/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(emergency){
    const sortedEmergency = [...emergency].sort((a,b)=>b-a);
    let output = [];
    for(let index=0 ; index<emergency.length ; index++){
        output[emergency.indexOf(sortedEmergency[index])]= index+1;
    }
    return output;
}

console.log(solution([3,76,24]));
console.log(solution([1,2,3,4,5,6,7]));
console.log(solution([30,10,23,6,100]));