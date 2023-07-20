`use strict`; //activate strict mode, always use strict mode to avoid errors, such as mis-spell

//functions
function logger() {
  console.log(`log record`);
}

logger(); //call the function

//parameters
function juice(apple, banana) {
  console.log(apple, banana);
  return apple;
}

//call function with parameters
juice(5, 0);

//function expression, another way of function
//function decleration allows to be call Globally while function epression must be called after it is defined
const age = function (birthYear) {
  return 2023 - birthYear;
};
console.log(age(2005));

//Thrid fucntion type, what so-called arrow function
const age2 = (birthYear) => 2023 - birthYear;
console.log(age2(2005));

//While using the arrow function, you must
const yearUntilRetirement = (birthYear, name) => {
  const age = 2023 - birthYear;
  const retirementYear = 65 - age;
  return `Hi! ${name} !, your need ${retirementYear} more years until your retirement`;
};
console.log(yearUntilRetirement(2005, `Howard`));

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(85, 54, 41);

const checkWinner = function (avg1, avg2) {
  if (avg1 >= avg2 * 2) {
    return `Team Dolphins Wins!`;
  } else if (avg2 >= avg1 * 2) {
    return `Team Koalas Wins!`;
  } else {
    return `No One Wins!`;
  }
};
console.log(checkWinner(avgDolphins, avgKoalas));
console.log(checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27)));

//-----------------------------------
//Array
const friends = [`Miku`, `Meiko`, `Rin`, `Len`, `Kaito`, `Luka`];
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

//In js, an array allow you to put different datatype values in one, even another array
const array = [39, `miku`, friends];
//Push is a method that adds addition elements into a existing array
array.push("Hatsune Miku");
//You can directlt assign the push method into a new variable to get the length of the array, e.g:
const arrayLength = array.push("Hatsune Miku");
//arrayLength = array.length

//There is also a method to add a new element to the begining of the array, with the method 'unshift()',e.g:
array.unshift(`Love Words`);

//remove a element, remove the last element from the array
array.pop();

//remove the first element, assign to a variable to get the removed element
array.shift();

//The method indexOf is used to get the location of the keyword from an array
const locations = array.indexOf("Miku");

//The method include simply return a boolean response on whether the element exist inside an array(true/false)
const exist = array.includes(39); //strict equality

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

const calcTip = (bill) => {
  if (bill <= 300 && bill >= 50) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

//array + ternary
const calcTip2 = (bill) =>
  bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [
  bills[0] + calcTip(bills[0]),
  bills[1] + calcTip(bills[1]),
  bills[2] + calcTip(bills[2]),
];

console.log(`${tip}
${total}`);

//Objects v.s array
//In objects, you are able to assign properties or a name to the elements, e.g:
const person = {
  name: `Hatsune Miku`,
  age: 16,
  birthYear: 2007,
  job: `Virtual Singer`,
  friends: friends,
  //you can also store not only variable but expressions or functions
  calcAge: function (birthYear) {
    return 2023 - this.birthYear;
  },

  //you can also update the properties and create a new one with functions
  updateAge: function (birthYear) {
    this.age = 2023 - birthYear;
  },

  info: function () {
    return `${this.name} is a virtual singer who is ${this.age} years old!${
      this.friends.length > 0
        ? `, and she has a lots of friends :)`
        : `, but she is lonely :(`
    }`;
  },
};
//while using objects, the order no longer matters if you want to retrive any information from the array
console.log(person.job);
//or, you can call it like in array form, and the anvantage of this way is that it takes in expressions, which is more dynamic
console.log(person[`job`]);

//you can also add new properties into object array with:
person.birthYear = 2007;
person[`gender`] = `Female`;

console.log(
  `${person.name} has ${
    person.friends.length
  } friends, and her best friend is ${
    person.friends[person.friends.length - 1]
  }`
);

console.log(person.calcAge());
console.log(person[`calcAge`]());
console.log(person.info());

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const mMiller = {
  name: `Mark Miller`,
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const jSmith = {
  name: `John Smith`,
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

console.log(
  mMiller.calcBMI() > jSmith.calcBMI()
    ? `${mMiller.name}'s BMI ${mMiller.calcBMI()} is higher than ${
        jSmith.name
      }'s ${jSmith.calcBMI()}!`
    : `${jSmith.name}'s BMI ${jSmith.calcBMI()} is higher than ${
        mMiller.name
      }'s ${mMiller.calcBMI()}!`
);

/// FOR LOOP !!!

/* for (let i = 0; i < 10; i++) {
  console.log(`HAPPY ! HAPPY ! HAPPY ! for ${i + 1} times!😊`);
}
 */

//continue and break
for (let i = 0; i < 10; i++) {
  //we can use continue to exit the current iteration
  if (i !== 3) continue; // with the keyword `continue` , if the condition is met, the statement will be exectuated and jump to the next iteration
  console.log(`Happy ! HAPPY ! HAPPY for ${i + 1} times!😊`);
}

//continue and break
for (let i = 0; i < 10; i++) {
  //we can use continue to exit the current iteration
  if (i === 1) break; // with the keyword `break` , if the condition is met, the statement will be terminate and stop the whole loop instead of just the iteration
  console.log(`Happy ! HAPPY ! HAPPY for ${i + 1} times!😊`);
}

//Math.random and Math.trunc
console.log(Math.trunc(Math.random() * 6) + 1); //This line return a integer between 1 to 6, Math.random generate a number between 0 to 1 in decimal
// Math.trunc will clear the decimal of the number and keep the integer, e.g 5.9 => 5

const dice = Math.trunc(Math.random() * 6) + 1;
while (dice === 6) {
  console.log(dice);
  break;
}

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bill.length; i++) {
  tips.push(calcTip(bill[i]));
  totals.push(bill[i] + calcTip(bill[i]));
}

console.log(bill, tips, totals);

const calcAvg = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
};

console.log(calcAvg(totals));
