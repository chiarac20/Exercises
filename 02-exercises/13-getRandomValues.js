// Ex 1
// Write a function that accepts one array
// The function must return a random element of the array

function getRandomElement (array) {
    // if (!array.length) throw new Error('No empty array');
    const randomIndex = parseInt(Math.random() * array.length);
    return array[randomIndex];
}

//  console.log(getRandomElement([1, 4, 7]))


// Ex 2
// Write a function that accepts one array ar and a number n (n smaller than ar length)
// The function must return an array with n element that will be randomly selected in ar without repetitions

function getRandomArray (array, number) {
    array.sort(() => Math.random() - 0.5)
    return array.slice(0, number);
}

// console.log(getRandomArray([1,3,6,8,9, 3], 3))

// Given an array of numbers find out if there is any reoccurrence

const [,,...input] = process.argv;
const numInput = input.map(n => parseInt(n));
console.log(findReoccurrence(numInput));

function findReoccurrence(numArray) {
    numArray.sort();
    return numArray.some((n, i) => n===numArray[i+1])
}


