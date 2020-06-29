
//write a function with a string and a character in input and the 
//number of times the character occurs in the string in output
function charinstring(str, character){
    str="";
    character="";
    let i;
    let output=0;
    for (i=0; i<str.length; i++){
        while (character===str[i]){
            output++;
        }
    }
    console.log(output)
}
charinstring("chiara", "a")
