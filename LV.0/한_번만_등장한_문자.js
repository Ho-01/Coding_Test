/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(s){
    let once = [];
    let twiceOrMore = [];    
    s.split("").forEach( char => {
        if(twiceOrMore.indexOf(char)==-1 && once.indexOf(char)==-1){
            once.push(char);
        } else if(twiceOrMore.indexOf(char)==-1 && once.indexOf(char)!=-1){
            once.splice(once.indexOf(char),1);
            twiceOrMore.push(char);
        }
    })

    if(once.length==0)return '';
    return once.sort().join("");
}

console.log(solution("abcabcadc"));
console.log(solution("abdc"));
console.log(solution("hello"));