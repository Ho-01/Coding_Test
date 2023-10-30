/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(my_string, letter){
    if(my_string.length<1||my_string.length>100){
        throw console.error("ERROR");
    }
    var output = [];
    var s = my_string.split('');
    s.forEach( e => {
        if(e!=letter)output.push(e);
    });
    var o = output.join('');
    return o;
}

console.log(solution("abcdef","f"));
console.log(solution("BCBdbe","B"));