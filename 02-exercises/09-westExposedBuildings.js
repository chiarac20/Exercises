function findWestExposedBuilding (arr){
    let buildingNumber =0;
    arr.forEach((building, buildingPosition) => {
        let result=findIfGreatest(arr, buildingPosition)
        if (result) {
            buildingNumber++;
        }
    })
    return buildingNumber;
}

console.log(findWestExposedBuilding([13, 40, 28, 4, 8]))

function findIfGreatest (arr, index){
    for (let i=index+1; i<arr.length; i++){
        if (arr[index]<arr[i]){
            return false;
        }
    }
    return true;
}
