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
  //settings must be inside a curly braces
  //You can also defined a default value to the argument in case if the argument is not defined at the end
  order: function ({ food = 'rice', address = 'Aspen 23009 knoll Dr' }) {
    console.log(
      `The customer ordered a ${food} and want to deliver it to the following address ${address}`
    );
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

//you can also deconstructuring a object and assigning them their own name:
const { name: restaurantName, categories: dishes } = restaurant;
//assigning the orginal exact name into new replaced name
console.log(restaurantName, dishes);

//again we can always setup a default value for whatever properties that we can't get.
//such as:
const { place = [], starterMenu: menu = [] } = restaurant;
//starter properties does not exist, so it is set to be default value, which is a empty array
//Otherwise, undefined will be retrieved from the variable
console.log(place, menu);

//if we want to mutate a variabel instead of creating a new ones:
//we can not assign let, const, or var, otherwise a newvariable will be created:
let a = 1;
let b = 2;
const object = { a: 12, b: 39, c: 69 };
//to make JS mutate our varaible, we need to add a parenthesis during the asignment, otherwise, JS is then expecting a code block
({ a, b } = object);
console.log(a, b);

//deconstructuring a nested obejct/2D object
const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close);

//we can now passing options as arguments into a object of a functions
//IMPORTANT !!! ⚠️ BOTH setting must be defined inside a curly braces inside the parenthesis!!!
//with curely braces inside a function calls, we are basically passing addition setting into the function as a parameter(arguments)
restaurant.order({
  food: 'rice',
  address: 'Aspen 23009 knoll Dr',
});

//The new ES6 JS ...Operator, that will expand all of the individual elements
//:
const arr2 = [1, 2, 3];
const newArr = [12, 39, ...arr]; //The operator "..." expand all elements quickly
console.log(newArr);
console.log(...newArr); //immediately deconstructuring the array into individuals

//copy an array
const mainMenuCopy = [...restaurant.mainMenu];
//merge 2 array in 1 quickly
const totalMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(totalMenu);

//The "..." operators are only apply to iterables which are all kinds of data types such as string, array, but not objects
//By using "..." operators on a string, it basically separate each individual letter form a string
//e.g:
console.log(...'Howard');

//The separad operator are not applied on string literals.

//The separad operator can be very useful when passing segments of parameters
//
function food(ing1, ing2, ing3) {
  console.log(`The ingredients are ${ing1}, ${ing2}, and ${ing3}`);
}

const ingArr = ['rice', `pepper`, `egg`];
food(...ingArr);

//You can now make a shallow copy of the object
//Ex:
const obj = restaurant; //would make a shallow copy which if you change a property of the obj, it also refelect on restaurant as well
const obj2 = { ...restaurant }; //now obj2 is a completely different copy from the original object
console.log({ ...restaurant }); //The object separad operator must be put in inside a curly braces, otherwise will be error
//Print each property separately

//we may also use the spread operator on the left hand side of the equal sign
//e.g:
const [fir, sec, ...others] = [1, 2, 3, 4, 5];
console.log(fir, sec, others);
//the rest operator on the left side of the equal sign will take all other elements that was unassigned into one array

//The rest element "...others" must be at the last of the elements,and doesn't account for any element ahead whether skipped or not
const [pizza, , resotto, ...restFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
//Pasta is mentioned although no name is given, it is still exempt from the 'rest' elements
console.log(restFoods);

//The rest operator can also be used for unknown amount of parameters inside a function, such as
function add(...numbers) {
  //By writing a function like this, the parameter takes both array or just a set of number separated by comma as the parameter
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

//so the unknown amount of parameter are now acceptable for functions using rest operator
console.log(add(1, 2));
console.log(add(1, 2, 3, 4));

//The OR(||) and the AND{&&} operator can be used on statements other than booleans, such as :
console.log(3 || 'Howard');
//It can take any data type and retun any data type and do something so-called : short Circuiting
//Short Circuiting means that if the first value is a truthy value, then it will return the first value
//if the first value is a falsy value, then the second value will be returned, no matter what the second value is

//If we have more than 2 value comparsion
console.log(0 || '' || undefined || 'Miku' || false);
//The first truthy value will be preinted

//we can also apply this idea with ternary operator
console.log(restaurant.numberOfGuest ? restaurant.numberOfGuest : 10); //⚠️
//if the numberOfGuest is a falsy value(0 or undefined, etc), it will return the default value of 10, otherwise return the truthy value
//With the usage of the OR operator, we can make the line of code above even easiler:

console.log(restaurant.numberOfGuest || 10);
//same functionailty as line 150 ⚠️

//The AND(&&) operator is exactly oppsite from the OR operator
//If the first value is the falsy value, then the first value will be returned immediately

//You can put anything around AND/OR operator even a function call
console.log(add && add(1, 2));

//By using ??, it basically accounts 0 and '' as truthy value as well which is also called: nullish value
//so only undefined and null will be account for false;
console.log(0 ?? 10);

//We can also use for of loop to loop over object:
//iterate and print the key name of the obejct:
for (const key of Object.keys(openingHours)) {
  console.log(key);
}

//stores all of the key names of an object inside an array
Object.keys(openingHours);

//stores all of the values inside the object inside an array
Object.values(openingHours);

//stores all of the variable, keys and properties inside a object and pring out as an array (multi-Dimension)
Object.entries(openingHours);

for (const [key, { open, close }] of Object.entries(openingHours)) {
  console.log(`On ${key}, we open at ${open}, and close at ${close}`);
}

//Code challenge 1 redo
///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

console.log('//////////////////////////////////');
const [players1, players2] = game.players;
console.log(players1, players2);
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

const printGoals = (...number) => {
  console.log(...number);
  console.log(number.length);
};
printGoals(1, 5, 2, 7, 99);

team1 < team2 && console.log(`team 1 wins`);
team2 < team1 && console.log(`team 2 wins`);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
console.log(`//////////////////////////////////////////////////////`);
console.log(Object.entries(game.scored));
for (const [key, goal] of Object.entries(game.scored)) {
  console.log(`Goal ${Number(key) + 1} : ${goal}`);
}

let sum = 0;
for (const odd of Object.values(game.odds)) {
  sum += odd;
}
console.log(sum / Object.values(game.odds).length);

console.log(Object.entries(game.odds));
for (const [key, odd] of Object.entries(game.odds)) {
  if (key !== 'x') console.log(`${game[key]} : ${odd}`);
  else console.log(`draw : ${odd}`);
}

console.log('Bonus -----------------------------------------');

/* let scorers = [[]];
for (let i = 0; i < game.scored.length; i++) {
  scorers[i].push(game.scored[i]);
  scorers[i][1] = 1;
  for (let j = i + 1; i < game.scored.length; i++) {
    if (game.scored[i] === game.scored[j]) {
      scorers[i][1] += 1;
    }
  }
}
console.log(scorers); */

// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  //ternary oeprator (if statement)
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  //use object instead of array
  //if the property called the player name exist in the object, then + 1 each time it exist, else create it and set it to default value 1
}

console.log(scorers);
