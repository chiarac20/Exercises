
/*Write a function that accept a number between 1 and 3999 and 
returns a string as the correspondent Roman number */


function decimalToRoman(num){
    const str=num.toString();
    const thousand=str.slice(-4,-3);
    const hundred=str.slice(-3,-2);
    const dozen=str.slice(-2,-1);
    const unit=str.slice(-1);
    const romanThousand=getThousand(thousand); 
    const romanHundred=getHundredDozenUnit(hundred, 'C', 'D', 'M');
    const romanDozen=getHundredDozenUnit(dozen, 'X', 'L', 'C');
    const romanUnit=getHundredDozenUnit(unit, 'I', 'V', 'X');
    return romanThousand + romanHundred + romanDozen + romanUnit;
}

console.log(decimalToRoman(8))


function getThousand (num){
    switch(num){
        case '1':
            return 'M';
        case '2':
            return 'MM';
        case '3':
            return 'MMM';
        default:
            return '';
    }
}


function getHundredDozenUnit (num, symbol1, symbol5, symbol10){
    switch(num){
        case '9':
            return symbol1 + symbol10;
        case '8':
            return symbol5 + symbol1 + symbol1 + symbol1;
        case '7':
            return symbol5 + symbol1 + symbol1;
        case '6':
            return symbol5 + symbol1;
        case '5':
            return symbol5;
        case '4':
            return symbol1 + symbol5;
        case '3':
            return symbol1 + symbol1 + symbol1;
        case '2':
            return symbol1 + symbol1;
        case '1':
            return symbol1;
        default:
            return ''
    }
}