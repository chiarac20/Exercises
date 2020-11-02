function findHighestCommonDenominator (arr) {
    const min=getMin(arr);   
    const denominators=findDenominators(min);
    denominators.reverse();
    const result=denominators.find((denominator)=>{
        for (let i=0; i<arr.length; i++){
            if(arr[i]%denominator!==0) {
                return false;
            }
        }   
        return true;
    })
    return result;
}


function getMin(arr){
    let smallest=arr[0];
    for (let i=1; i<arr.length; i++){
        if(smallest>arr[i]) {
            smallest=arr[i]
        }
    }
    return smallest;
}

function findDenominators(num){
    const denominators=[];
    for (let i=1; i<=num; i++){ 
        if (num%i===0) {
            denominators.push(i);
        }
    }
    return denominators;
}


console.log(findHighestCommonDenominator([30, 15, 20]))

// = arr.find(callback);
function findEquivalent(arr, callback){
    for (let i=0; i<arr.length; i++){
        if (callback(arr[i], i, arr)){
            return arr[i]
        }
    }
}