/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(order){
    let price = 0;
    let americano = ["iceamericano","americanoice","americano","anything","hotamericano","americanohot"];    
    let cafeLatte = ["icecafelatte","cafelatteice","cafelatte","hotcafelatte","cafelattehot"];
    order.forEach(element => {
        if(americano.includes(element)){
            console.log("americano");
            price+=4500;
        } else if (cafeLatte.includes(element)){
            console.log("latte");
            price+=5000;
        }
    });
    return price;    
}

console.log(solution(["cafelatte", "americanoice", "hotcafelatte", "anything"]));
console.log(solution(["americanoice", "americano", "iceamericano"]));