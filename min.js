const prices = [13000,13560,10000,40000,24200,15000];
function geiMin (numbers){
    let min = prices[0];
    for(const number of numbers){
        if(number < min){
            min = number;
        }
    }
    return min;
}
const lowPrice = geiMin(prices);
console.log(lowPrice);