let js = "amazing";
if (js == "amazing") alert("JavaScript is FUN!");
console.log("MIKU SUKI");

console.log("Miku");
let firstName = "Miku";
let lastName = "Hatsune";
console.log(typeof true); //syntax typeof reveal the data type of the input value
console.log(typeof "Howard"); //string
console.log(typeof 39.39); //number

console.log(firstName, lastName);

//code challenge
//Test Data 1
const heightMark = 1.69;
const weightMark = 78;
const heightJohn = 1.95;
const weightJohn = 92;

//Test Data 2
/* const heightMark = 1.88;
const weightMark = 95;
const heightJohn = 1.76;
const weightJohn = 85; */

function getBMI(height, weight) {
  return weight / height ** 2;
}

if (getBMI(heightMark, weightMark) > getBMI(heightJohn, weightJohn)) {
  console.log(
    `Mark has higher BMI than John, ${getBMI(
      heightMark,
      weightMark
    )} vs ${getBMI(heightJohn, weightJohn)}`
  );
} else if (getBMI(heightMark, weightMark) == getBMI(heightJohn, weightJohn)) {
  console.log(
    `Mark and John has equal BMI, ${getBMI(heightMark, weightMark)} vs ${getBMI(
      heightJohn,
      weightJohn
    )}`
  );
} else {
  console.log(
    `John has higher BMI than Mark, ${getBMI(
      heightJohn,
      weightJohn
    )} vs ${getBMI(heightMark, weightMark)}`
  );
}

//String template Literals
console.log(
  "Hi, I'm Howard, and my favoriate idol is " +
    lastName +
    " " +
    firstName +
    ", and she is " +
    16 +
    " years old."
);

console.log(
  `Hi, I'm Howard, and my favoriate idol is ${lastName} ${firstName}, and she is ${16} years old.`
);

//if statement
let age = 7;
let oldEnough = age >= 18;
if (oldEnough) {
  console.log(`You are free to take a driver's lisences exam ! 😊`);
} else {
  let years = 18 - age;
  console.log(`Wait ${years} more years to come! 😉`);
}

//Datatype conversion and type coercion
//type coercion is done by javascript and automatically/unseen
let birthYear = "2005";
console.log(birthYear + 18); //prints 200518

//type conversion
console.log(Number(birthYear) + 18); //Number() is a built-in function used to convert string into number
console.log(String(20) + 18); //String() is a built-in function used to convert number into strings

//type coercion
console.log(`I'm ` + 18 + `years old`); //type conercion occurs by convert 18 into string
console.log("30" - "20" - 1); //returns 9 because javascript automatically convert the string into numbers with the double quote,
//only happen in minus operator or multiply/divide, if + is used, it will append the string

//Boolean conversion syntax: Boolean()
//Falsy values: 0, "", undefined, null, NaN , means they will be see as "false" when convert to boolean datatype
//Truthy valuse: any non-0 integers or non-empty string/object will see as "true"

// Double equal (==) consider datatype coercion
// Triple equal (===) is relative restricted and not only check the content itself but also consider the datatype of the variable
// strict equal is recommanded, double equal(==) could cause a lots of trouble

//prompt() ask an input through webpage
//use Number() to convert the input value into a number datatype instead of string

/* const favoriateNumber = Number(prompt("What is your favoriate number?"));
alert(`Your favoriate number is ${favoriateNumber} !`); */

//Logic Operator, AND(&&) must all be true to be true
//OR(||) must all be false to be false

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106*/

const avgDolphins = (96 + 108 + 89) / 3;
const avgKoalas = (88 + 91 + 110) / 3;

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log("Dolphins Wins!");
} else if (avgDolphins === avgKoalas && avgDolphins >= 100) {
  console.log("DRAW!");
} else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
  onsole.log("Koalas Wins!");
}

//-------------------------------------------------------------
//Switch Statement, a easiler form of if statement
let day = prompt("What is today?"); //day === `monday
switch (day) {
  case `Monday`:
    alert(`it is Monday!`);
    break;
  case `Tuesday`:
    alert(`it is Tuesday!`);
    break;
  case `Wednesday`:
  case `Thursday`:
    alert(`V me 50 :D`);
    break;
  default:
    alert(`What a nice day!`);
}

// Translate into if/else format

if (day === `Monday`) {
  alert(`it is Monday!`);
} else if (day === `Tuesday`) {
  alert(`it is Tuesday!`);
} else if (day === `Wednesday` || day === `Thursday`) {
  alert(`V me 50 :D`);
} else {
  alert(`What a nice day!`);
}

//Short if/else in one line, (Ternary)
// ? ==> if
// : ==> else
let mikuAge = 16;
mikuAge >= 18
  ? console.log(`miku is an adult!`)
  : console.log(`miku is still a kid`);

//you can also store it into a variable
//  form:         condition ? statement 1 : statement 2
//as Ternary is an EXPRESSION !!! it can be brought into a string literal!
let isAdult = mikuAge >= 18 ? true : false;
console.log(
  `I know that ${
    mikuAge >= 18 ? `Miku is an adult!` : `Miku is still my baby girl`
  }`
);

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. 
In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 
(If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

let bill = 40;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
