
//Calculate all the dividers of a number.


function findDividers(){
    const num=+document.getElementById('number').value;
    const dividers=getDividers(num);
    for (let i=0; i<dividers.length; i++){
        const divider=document.createElement('li');
        divider.innerText=dividers[i];
        document.getElementById('dividers').appendChild(divider);
    }
}

function getDividers(num){
    let dividers=[];
    for (let i=1; i<num; i++) {
        if (num%i===0){
            dividers.push(i);
        }
    }
    return dividers;
}