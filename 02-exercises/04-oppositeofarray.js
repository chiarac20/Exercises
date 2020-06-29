
//Given  an array, write one that is the opposite
function getOppositeOfArray(arr){
    let oppositeArr=[];
    for (let i=arr.length-1; i>-1; i--){
        oppositeArr.push(arr[i]);
    }
    console.log(oppositeArr);
}
getOppositeOfArray ([1,2,3,4,5]);
