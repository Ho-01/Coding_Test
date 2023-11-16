/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(s,n){
    s = s.split("");
    let out = [];
    s.forEach( char=>{
        let ascii = char.charCodeAt();
        if(ascii==32){
            out.push(" ");
        } else if(65<=ascii&&ascii<=90){
            ascii += n;
            if(ascii>90)ascii = ascii-26;
            out.push(String.fromCharCode(ascii));
        } else if(97<=ascii&&ascii<=122){
            ascii += n;
            if(ascii>122)ascii = ascii-26;
            out.push(String.fromCharCode(ascii));
        }
    })
    return out.join("");
}

console.log(solution("AB",1));
console.log(solution("z",1));
console.log(solution("a B z",4));