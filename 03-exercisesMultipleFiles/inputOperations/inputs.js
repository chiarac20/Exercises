
/*Insert an input text and the 4 operations and a button. 
When the user clicks the button, show the result in alert */
function doOperations(){
    const number1=+document.getElementById('number1').value;
    const number2=+document.getElementById('number2').value;
    const selectedOperator=document.querySelector('.operations:checked');
    let result;
    switch (selectedOperator.id) {
        case 'plus': 
            result=number1 + number2;
        break;
        case 'minus': 
            result=number1-number2;
        break;
        case 'multiplication':
            result=number1 * number2;
        break;
        case 'division':
            result=number1 / number2;
    }
    alert (result);
}
