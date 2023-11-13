/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(arr,queries){
    queries.forEach( query => {
        for(let i=query[0] ; i<=query[1] ; i++){
            if(i%query[2]==0) arr[i]++;                        
        }
    })
    return arr;
}

console.log(solution([0,1,2,4,3],[[0,4,1],[0,3,2],[0,3,3]]));