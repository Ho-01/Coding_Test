/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(str1,str2){
    var len1 = str1.length;
    var len2 = str2.length;
    for(var i=0; i<len1; i++){
        if(str1[i]==str2[0]){
            var sub1 = str1.substr(i,len2);
           if(sub1==str2)return 1;
        }
    }
    return 2;
}

console.log(solution("ab6CDE443fgh22iJKlmn1o","6CD"));
console.log(solution("ppprrrogrammers","pppp"));
console.log(solution("AbcAbcA","AAA"));