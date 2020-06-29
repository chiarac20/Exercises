

/* Given 3 parameters, an array and 2 different numbers that are smaller 
than the length of the array, swap the elements of the array in the positions
indicates by the second and third parameter*/

function swapElements (arr, index2, index3) {
    let indexTwo=arr[index2];
    arr[index2]=arr[index3];
    arr[index3]=indexTwo;
    console.log(arr);
}

swapElements([1,2,3,4,5], 2,4);
swapElements ([2,5,9,10,14], 1,3);
