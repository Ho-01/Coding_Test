/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(my_string){
    let out = new Array(52);
    out.fill(0);
    my_string.split("").forEach( char =>{ 
        console.log(char.charCodeAt());
        if(65<=char.charCodeAt() && char.charCodeAt()<=90){
            out[char.charCodeAt()-65]++;
        } else if(97<=char.charCodeAt() && char.charCodeAt()<=122){
            out[char.charCodeAt()-71]++;
        }
    })
    return out;
}

console.log(solution("Programmers"));