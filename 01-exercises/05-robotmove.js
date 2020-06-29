function robotMove (movement){
    let position = 0;
    for (let index=0; index<movement.length; index++){
        let singleMovement=movement[index];
        if (singleMovement==='S'){
            position++;
        }
        if (singleMovement==='N'){
            position--;
        }
    }
    return position;
}

