/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(my_string){
    var sum = 0;
    var m = my_string.split('');
    m.forEach( e =>{
        if(isNaN(e)==false)sum+=Number(e);
    })
    return sum;
}

console.log(solution("aAb1B2cC34oOp"));
console.log(solution("1a2b3c4d123"));