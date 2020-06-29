
 /*Write a function with an array of numbers as a parameter 
 and returns an array with all even positive numbers*/

 function evenNumbers (fullNumberList){
     let i;
     let numbers=[];
     for (i=0; i<fullNumberList.length; i++) {
          if (fullNumberList[i]>0 &&
              fullNumberList[i]%2===0){
              numbers.push(fullNumberList[i]);
          }
     }
     return numbers; 
 }

 const result = evenNumbers ([-1, 4, 2, 6, -8, 24]);
 console.log(result);
 

//Write a function with a string and a number as its parameters and shows the string as many times as the number given
 function repeatLog (str, number){
     let i;
     for (i=1; i<=number; i++){
        console.log(str);
    }
 } 
 
repeatLog("chiara", 3);


//write a function that accepts an array and swaps the first and last elemtn
function arrayBordersSwap (array){
    let a;
    let b;
    array=[a,b];
    a=b;
    b=a;
    console.log (array)
}
arrayBordersSwap([1,3])
