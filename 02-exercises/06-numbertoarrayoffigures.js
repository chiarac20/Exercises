// scrivi una funzione che accetta un numero e restituisce un array di numeri 
// i cui elementi sono le cifre del numero passato

function numberToArrayOfFigures (num){
    const str=num.toString();
    const splitStr=str.split('');
    const result = splitStr.map(function mapArray(element) {
        return parseInt(element);
    });
    return result;
}
console.log(numberToArrayOfFigures(process.argv[2]));




//given a group of words and a character, find how many words contain that character

function getCharFromWords(sentence, char) {
    const splitSentence=sentence.split(' ');
    const result=splitSentence.filter(function filterArray(word){
        for (let i=0; i<word.length; i++){
            if(word[i]===char){
                return true;
            }
        }
        return false; 
    })
    return result.length;
}

console.log(getCharFromWords('chiara e raffaele', 'e'));
console.log(getCharFromWords(process.argv[2], process.argv[3]));



/* Given a string that contains decimal numbers, return a new string 
that contains the same number but only with 2 numbers after.*/

function decimalTwoFigures(input){
    const result=input.map(mapArray);
    return result;
}

function mapArray(number){
    if (number==='') {
        return '0.00'
    }
    const dotPosition=number.indexOf('.');
    if (dotPosition===-1) {
        return number + '.00'; 
    }
    const decimalPart=number.substring(dotPosition, dotPosition + 3);
    const wholeNumber=number.substring(0, dotPosition);
    const secondDecimal=number.substring(dotPosition+2, dotPosition+3)
    if (secondDecimal===''){
        return wholeNumber + decimalPart +'0'
    }
    return wholeNumber + decimalPart;    
}
console.log(decimalTwoFigures(['23', '', '24.567']));

function myForEachTest(myArray){
    myArray.forEach(function (element, index, completeArray){
        if(element!==''){ 
            console.log(element, index, completeArray)
        }
    })
}
