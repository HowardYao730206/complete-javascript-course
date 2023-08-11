'use strict';

//set up a default value for the parameters

//by putting a equal sign behind the parameter, you can set a default value to it just in case if the parameter did not get
//specify when the function is being called
const creatBooking = function (
  flightNum,
  numPassengers = 1,
  //you can set any expression as the default parameter, even the pre declared parameters
  price = 999 * numPassengers
) {
  const arr = [flightNum, numPassengers, price];
  return arr;
};

console.log(creatBooking(3));
console.log(creatBooking(3, undefined, 3)); //we can specify undefined to the parameter if we want to skip to define a parameter

const flight = 'LH234';
const howard = {
  name: `Howard`,
  passportNum: 172836812736,
};

const checkIn = function (flight, passenger) {};

checkIn(flight, howard);

//A function that replace all spaces
const oneWord = function (word) {
  return word.replace(/ /g, '').toLowerCase(); // `/ /g stands for spaces`
};

console.log(oneWord('Hi! my name is Howard!'));

const upperFirstWord = function (str) {
  const [firstWord, ...restWords] = str.split(' ');
  return [firstWord.toUpperCase(), ...restWords].join(' ');
};

//Higher-Order Function
const transformer = function (str, fn) {
  return fn(str);
};

console.log(transformer(`Javascript is the best!`, upperFirstWord));
console.log(transformer(`Javascript is the best!`, oneWord));
