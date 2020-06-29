let input = parseInt(process.argv[2]);

let factorial = 1;
for(let i = input; i>1; i--) {
    factorial = factorial * i;
}

console.log(factorial);
