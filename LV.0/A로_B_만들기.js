/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(before, after){
    before = before.split("");
    after = after.split("");
    for(let i=0 ; i<before.length ; i++){
        if(after.indexOf(before[i])==-1){
            return 0;
        } else{
          after.splice(after.indexOf(before[i]),1);         
        }
    }    
    return 1;
}

console.log(solution("olleh", "hello"));
console.log(solution("allpe", "apple"));