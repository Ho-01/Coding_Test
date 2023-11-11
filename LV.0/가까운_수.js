/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(array, n){
    var out;
    var distance = 100;
    for(var i=0 ; i<array.length ; i++){
        var current = Math.abs(n - array[i]);
        if(current<distance){
            out=i;
            distance=current;
        } else if(current==distance){
            if(array[i]<array[out]){
                out=i;
                distance=current;
            }
        }
    }
    return array[out];
}

console.log(solution([3,10,28],20));
console.log(solution([10,11,12],13));