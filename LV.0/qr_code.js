/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(q,r,code){
    let out = [];
    for(let i=0 ; i<code.length ; i++){
        if(i%q==r)out.push(code[i]);
    }
    return out.join("");
}

console.log(solution(3,1,"qjnwezgrpirldywt"));
console.log(solution(1,0,"programmers"))