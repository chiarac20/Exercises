
/*Write a function that accepts an array of numbers and returns how many times 
an element of the array is greater or equal to the previous one*/
function howManyTimes (arr){
    let times=0;
    for (let i=1; i<arr.length; i++){
        if (arr[i]>=arr[i-1]){
            times++;
        }
    }
    return times;
}

let result = howManyTimes ([1,3,2,7,9, -6]);
console.log(result);