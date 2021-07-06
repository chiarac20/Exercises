// Ex 1
// Write a function that accepts one array
// The function must return a random element of the array

function getRandomElement (array) {
    if (!array.length) throw new Error('No empty array');
    const randomIndex = parseInt(Math.random() * array.length);
    return array[randomIndex];
}

//  console.log(getRandomElement([1, 4, 7]))


// Ex 2
// Write a function that accepts one array ar and a number n (n smaller than ar length)
// The function must return an array with n element that will be randomly selected in ar without repetitions

function getRandomArray (array, number) {

}
