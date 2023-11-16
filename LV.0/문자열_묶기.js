/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(strArr){
    let count = {};
    strArr.forEach( str =>{
        let lenOfStr = str.length;
        if(lenOfStr in count){
            count[lenOfStr]++;
        } else{
            count[lenOfStr] = 1;
        }        
    })
    return Math.max(...Object.values(count));
}

console.log(solution(["a","bc","d","efg","hi"]));