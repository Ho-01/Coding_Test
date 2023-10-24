/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(strlist){
    var len = strlist.length;
    if(len<1||len>100){
        throw console.error("ERROR : strlist.length must be in range 1~100");
    }
    var output = [];
    strlist.forEach(str => {
        output.push(str.length);
    });
    return output;
}

var a1 = ["We","are","the","world!"];
var a2 = ["I","Love","Programmers."];

console.log(solution(a1));
console.log(solution(a2));