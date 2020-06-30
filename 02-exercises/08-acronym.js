//Given a sentence, return its acronym

function createAcronym (sentence){
    const words = sentence.split(' ');
    const acronym=[];
    for (let i=0; i<words.length; i++){
        acronym.push(words[i][0].toUpperCase());
    }
    return acronym.join('');
}
 
console.log(createAcronym('As soon as possible'))
