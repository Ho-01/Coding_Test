/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(s){
    let sArray = s.split(" ");
    let sum = 0;
    let before;
    sArray.forEach(num => {
        if(num=="Z"){
            sum -= before;
        } else{
            before = Number(num);
            sum += before;
        }
    })
    return sum;
}

console.log(solution("1 2 Z 3"));
console.log(solution("10 20 30 40"));
console.log(solution("10 Z 20 Z 1"));
console.log(solution("10 Z 20 Z"));
console.log(solution("-1 -2 -3 Z"));