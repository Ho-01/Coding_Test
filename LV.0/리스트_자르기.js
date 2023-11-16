/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(n, slicer, num_list){
    let a = slicer[0];
    let b = slicer[1];
    let c = slicer[2];
    if(n==1){
        return num_list.slice(0,b+1);
    } else if(n==2){
        return num_list.slice(a);
    } else if(n==3){
        return num_list.slice(a,b+1);
    } else if(n==4){
        let out = [];
        let slicedNum_list = num_list.slice(a,b+1);
        let i = 0;
        while(c*i<slicedNum_list.length){
            out.push(slicedNum_list[c*i]);
            i++;
        }
        return out;
    }
}

console.log(solution(3,[1,5,2],[1,2,3,4,5,6,7,8,9]));
console.log(solution(4,[1,5,2],[1,2,3,4,5,6,7,8,9]));