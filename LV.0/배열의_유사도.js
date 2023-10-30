/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(s1,s2){
    if(s1.length<1||s1.length>100||s2.length<1||s2.length>100){
        throw console.error("ERROR : s1.length & s2.length must be in range 1~100");
    }
    var count = 0;
    s1.forEach( e => {
        s2.forEach( ee => {
            if(e==ee)count++;
        });
    });
    return count;
}

console.log(solution(["a","b","c"],["com","b","d","p","c"]));
console.log(solution(["n","omg"],["m","dot"]));