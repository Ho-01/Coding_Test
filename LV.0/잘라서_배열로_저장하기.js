/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(my_str, n){
    let output = [];
    let index = 0;
    while(index <= my_str.length-1){
        output.push(my_str.substr(index,n));
        index += n;
    }
    return output;
}

console.log(solution("abc1Addfggg4556b",6));
console.log(solution("abcdef123",3));