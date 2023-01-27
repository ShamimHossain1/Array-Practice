var numbers= [10, 20, 30, 40, 50, 60];
// index-----> 0   1   2   3   4   5 

// 1. get element value by index
var element=numbers[5];
console.log(element);

// 2. set element value by index
numbers[2]= 25;
numbers[4]= 55;
console.log(numbers);

// 3. find index of an element

var positionIndex = numbers.indexOf(60);
console.log(positionIndex);
