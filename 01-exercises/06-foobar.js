function foobar (x) {
    if (x%5===0 && x%3===0){
        return 'foobar'
    }
    if (x%3===0) {
        return 'foo';    
    }
    if (x%5===0){
        return 'bar';
    }
    return 'hello';
}
let output=foobar (process.argv[2]);
console.log (output); 
