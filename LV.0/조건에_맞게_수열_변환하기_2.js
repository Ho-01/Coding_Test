/*
    Ho-01
    kimhobig@gmail.com
*/

//
function convertArray(arr){
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i]>=50&&arr[i]%2==0){
            arr[i]=arr[i]/2;
        } else if(arr[i]<50&&arr[i]%2==1){
            arr[i]=arr[i]*2+1;
        }
    }
    console.log(arr);
    return arr;
}
function solution(arr){
    let countX = 0;
    while(true){
        let convertedArr = convertArray(arr.slice());
        if(arr.every((element, index)=> element==convertedArr[index])){
            return countX;
        }
        countX++;
        arr = convertedArr;
    }    
}

console.log(solution([1,2,3,100,99,98]));