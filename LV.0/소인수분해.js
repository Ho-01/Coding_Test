/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(n){
    let primeFactors = [];
    let i = 2;
    while(n!=1){
        if(n%i==0){
            n = n/i;
            if(primeFactors.indexOf(i)==-1) primeFactors.push(i);
        } else{
            i++;
        }
    }
    return primeFactors;
}

console.log(solution(12));
console.log(solution(17));
console.log(solution(420));