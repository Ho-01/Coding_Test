/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(myString, pat){
    var p_len = pat.length;
    var index = 0;
    for(var i=0 ; i<myString.length-(p_len-1) ; i++){
        if(pat==myString.substr(i,p_len)){
            index = i+(p_len-1);
        }
    }
    return myString.substr(0,index+1);
}

console.log(solution("AbCdEFG","dE"));
console.log(solution("AAAAaaaa","a"));