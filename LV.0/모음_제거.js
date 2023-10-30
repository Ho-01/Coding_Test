/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(my_string){
    var vowel = ["a","e","i","o","u"];
    var out = [];
    var m = my_string.split('');
    m.forEach( e => {
        if(!(vowel.includes(e)))out.push(e);
    });
    var o = out.join('');
    return o;
}

console.log(solution("bus"));
console.log(solution("nice to meet you"))