/*
    Ho-01
    kimhobig@gmail.com
*/

//
function factorial(i){
    if(i==1){
        return 1;
    } else{
        return i*factorial(i-1);
    }
}

function solution(n){
    i = 1;
    while(factorial(i)<=n){
        i++;
    };
    return i-1;
}

console.log(solution(3628800));
console.log(solution(7));