// app/calc.js
function sum(arr){
    var sum = 0;
    for(var i = 0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}
module.exports.Sum = sum;