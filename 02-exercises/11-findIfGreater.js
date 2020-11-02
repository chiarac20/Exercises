function findIfGreater (arr,number){
    const result = arr.every((element) => {
        return element > number;
    });

    return result;
    // for (let i=0; i<arr.length; i++){
    //     if(arr[i]<=number) {
    //         return false;
    //     }
    // }
    // return true;
}

console.log(findIfGreater([1,5,8,2,9], 3));

