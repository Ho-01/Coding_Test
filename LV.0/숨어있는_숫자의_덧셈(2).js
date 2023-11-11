/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(my_string){
    var sum = 0;
    var temp = '';
    for(var i=0 ; i<my_string.length ; i++ ){        
        if(isNaN(my_string[i])==true){
            sum+=Number(temp);
            temp = '';
        } else{
            temp += my_string[i];            
        }        
    }
    sum+=Number(temp);
    return sum;
}

console.log(solution("aAb1B2cC34oOp"));
console.log(solution("1a2b3c4d123Z"));