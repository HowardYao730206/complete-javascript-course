'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = [1, 2, 3];
//destructuring an array
const [x, y, z] = arr;
console.log(x, y, z);

//destructuring doesn't require all variable
//e.g:
let [first, second, , fourth] = restaurant.categories;
//only the first two elements of the array are taken
console.log(first, second, fourth);

//we can also just leave a 'hole' to skip the element to access:

//you can simply switch the position of the elements inside an array with array deconstructuring
[first, second] = [second, first];
console.log(first, second);

//you can have 2 return value from a function with array deconstructuring
//e.g: return a array and immediately deconstructuring them

//obtain all the elements from a nested array(2d array)
const array = [1, 2, [3, 9]];
const [firNum, secNum, [firNum2, secNum2]] = array;
console.log(firNum, firNum2, secNum, secNum2);

//you can also assign a default value if you don't know the number of the elements pre-ahead(so it is not 'undefined')
//such as:
const numArr = [1, 2];
const [i = 1, j = 1, k = 1] = numArr;
console.log(i, j, k);
//so, just in case if k didn't get any value, k will be automatically set to be 1 instead of undefined

//You can also deconstructuring object with javascript
//The name must be exact match for the properties of the objects
const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);
