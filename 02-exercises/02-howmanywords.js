
//Given an array of strings and a character, find out the number of strings that contacin that character

function howManyStr (arr, character){
    let numberOfStr=0;
    for (let i=0; i<arr.length; i++){
        let timesInStr=0;
        for (let ii=0; ii<arr[i].length; ii++){
            if (arr[i][ii]===character) {
                timesInStr++;
            }
        }
        if (timesInStr>0) {
            numberOfStr++;
        }
    }
    return (numberOfStr);
}

let result1=howManyStr (['chiara','e','raffaele', 'vanno al parco'], 'e');
console.log(result1);

/*Given a string of alphabetical characters and spaces and a character,
find out how many words in the string contain the character given*/

function howManyWords (sentence, character) {
    const words=sentence.split(' ');
    let result=howManyStr(words, character);
    return result;
}

let result = howManyWords ('chiara e raffaele', 'e');
console.log(result);
