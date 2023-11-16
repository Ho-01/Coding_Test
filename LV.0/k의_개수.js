/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(i,j,k){
    let nums = [];
    for(let n=i ; n<=j ; n++){
        nums.push(n);
    }
    nums = nums.join("").split("");
    let count = 0;
    nums.forEach( number =>{
        if(number==k)count++;
    })
    return count;
}

console.log(solution(1,13,1));
console.log(solution(10,50,5));
console.log(solution(3,10,2));