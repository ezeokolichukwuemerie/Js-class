const fruits = [
    'Apples',
    'Pomegranate',
    'Mango',
    'Strawberries',
    'Pineapple',
    'Grapefruit'
];
const moreFruits= [
    'Pear',
    'coconut',
    'guava',
    'maize'
];
totalFruits = fruits.concat(moreFruits); // to add two arrays together to form one array.
console.log(totalFruits);
console.log(totalFruits.includes('Apples'));
console.log(fruits.join('-')); // this add '-' in-between the two of each oth them.
console.log(fruits.reverse()); // this will reverse the array from end to start
console.log(fruits.splice(0,2))
console.log(fruits.sort())
fruits.push('banana');// this will add banana in the end of an the array making it to be 7 element
console.log(fruits);
// console.log(fruits.length);
fruits.pop();// this will remove the last element of an array
console.log(fruits);
fruits.shift();//this will remove the fist element of the array
console.log(fruits);
fruits.unshift('oranges'); // this will add oranges in the beginning of the array
console.log(fruits);
