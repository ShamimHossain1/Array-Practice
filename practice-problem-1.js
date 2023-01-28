// ------------------------Practice Problem 1-----------------------

// You are given an array:

var fruits = ['Apple', 'Banana', 'Orange'];
 
// a)Find the index of "Banana" and replace 'Banana' with 'Mango'.

var positionIndex = fruits.indexOf('Banana');
console.log( positionIndex);

fruits [1] = 'mango';
console.log(fruits);

// b)Remove 'Orange' and add 'Watermelon'.
 fruits.pop();
 fruits.push('Watermelon');
console.log(fruits);


