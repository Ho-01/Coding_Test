/*
    Ho-01
    kimhobig@gmail.com
*/

//reverseString
function solution(my_string){
    var len = my_string.length;
    var output = [];
    if(len<1||len>1000){
        throw console.error("ERROR : my_string.length must be in range 1~1000");
    }
    for(var i = len-1 ; i>=0 ; i--){
        output.push(my_string[i]);
    }
    return output.join("");
}

console.log(solution("jaron"));
console.log(solution("bread"));