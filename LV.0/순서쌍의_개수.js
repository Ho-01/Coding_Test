/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(n){
    if(n<1||n>1000000){
        throw console.error("ERROR : n must be in range 1~1000000");
    }
    var count = 0;
    for (var i=n ; i>=1 ; i--){
        if(i%1==0){
            if(n%i==0)count++;
        }
    }
    return count;
}

console.log(solution(20));
console.log(solution(100));