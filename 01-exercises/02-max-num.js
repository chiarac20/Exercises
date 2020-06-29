let input=[9,8,15,1,357];
let max = input[0];

for (let index=1;index<input.length;index++){
    if (input[index]>max){
        max=input[index];
    }
}
console.log (max);