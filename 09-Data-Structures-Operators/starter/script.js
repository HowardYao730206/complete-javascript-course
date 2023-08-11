'use strict';

// Data needed for a later exercise
/* const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'; */

const weekdays = [`mon`, `tue`, `wed`, `thur`, `fri`, `sat`, `sun`];

// Data needed for first part of the section
const openingHours = {
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
  //Property name is can be dynamic and computable
  //P.S: remember to add a square bracket
  [weekdays[2]]: {
    open: 8,
    close: 20,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //Must be the exact same object name
  //it is now also consider a global variable and not a block-scope variable
  openingHours,
  //the function keyword inside a object is no longer a  requirement
  testFunction() {
    console.log(`Mic Test, 1, 2 `);
  },
  //settings must be inside a curly braces
  //You can also defined a default value to the argument in case if the argument is not defined at the end
  order: function ({ food = 'rice', address = 'Aspen 23009 knoll Dr' }) {
    console.log(
      `The customer ordered a ${food} and want to deliver it to the following address ${address}`
    );
  },
};

restaurant.testFunction();

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
const { name, categories } = restaurant;
console.log(name, categories, openingHours);

<<<<<<< Updated upstream
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
=======
//rest 1
const rest1 = {
  name: 'KFC',
};

rest1.name ||= `McDonald`; // This line of code here is equal to  rest.name = rest.name||`McDonald`
//if, rest1.name is a falsy value, it will be set to be McDonald, otherwise the truthy value will be define
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
console.log(
  'Coding Challenge 1:--------------------------------------------------------'
);
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
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
=======
const [players1, players2] = game.players;
//If there are remaining elements, all will be take into the fieldPlayers variable
const [gk, fieldPlayers] = game.players;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(allPlayers);

//const [team1,draw,team2] = game.odds;
//if it is curly braces, write the exact property name, if not "[]", write in order
const {
  odds: { team1, x: draw, team2 },
} = game;

//takes in any number of parameters
function printGoals(...players) {
  console.log(...players);
  //The total number of the parameters
  console.log(`${players.length}`);
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
//doesn't print anything because there are no console.log
team1 < team2 || console.log(`team 2 wins`);
team2 < team1 || console.log(`team 1 wins`);

//quicker way to loop all elements of a array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//looks like for(int variable : array) in java
for (let item of menu) {
  console.log(item);
}
//OLD SCHOOL WAY LOL
for (let item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
//Print menu.entries() like this:
console.log([...menu.entries()]);
// it is a 2d array contain both the element and the index of the element in the array

//apply destructuring into the for-of loop
for (let [list, item] of menu.entries()) console.log(`${list + 1}: ${item}`);

console.log(restaurant.openingHours.mon); //undefined, because mon does not exist
//console.log(restaurant.openingHours.mon.open); //error, because since mon does not exist, open is trying to read a property from undefined, which is illegal

//Optional Chaining
console.log(restaurant.openingHours.mon?.open); //now return undefined, as soon as whatever is before the question mark is undefined, the program will
//immediately return undefined
//Multiple Optional Chaining is allowed, it is basically multiple checkpoint

for (const day of weekdays) {
  //if we don't use the optional Chaining, the "restaurant.openingHours[day]?.open" will return error instead of undefined
  console.log(
    //we can also apply with condition operators so undefined does not appeared
    //try use nulish so 0 and empty string is also account
    `On ${day} , we open on ${restaurant.openingHours[day]?.open ?? 8}`
  );
  //restaurant.openingHours[day] is basically = restaurant.openingHours.mon, restaurant.openingHours.tue, and so on
  //if we want to use variable to be our dynamic property name
}

//you need to add a dot "." to check if the the method exist or not
console.log(restaurant.order?.(0, 1) ?? `Method does not exits`);

//we can also check if an array is either empty or not
const userName = [{ name: `Howard`, gender: `male` }];

console.log(userName[2]?.name || 'Jack');

//The new common datatype, set
//set is bascially a set of element that contain unique value and does not duplicate

const orderSet = new Set([`Pizza`, `Pizza`, `Pasta`, `Rice`, `Pasta`]);
console.log(orderSet); // => [Pizza,Pasta,Rice]
//ignore duplicate values

console.log(new Set(`Howard`));

console.log(orderSet.size); // = The size of the set variable

console.log(orderSet.has(`Pizza`)); //check if the set contain the specific variable

orderSet.add(`Tofu`); //add new elements into a set
orderSet.delete('Rice'); //delete the existing element that was contain in that list
console.log(orderSet);

//we cannot retreive values out from a set and the most of time why we use set is when we need to know whether a certain value is existing or contained inside a set

//However, we can still loop through the values from the set
for (const order of orderSet) console.log(order);

orderSet.clear(); //immediately clear all value inside the set

//A usage when you want to simplify the elements
const staff = [`Waiter`, `Waiter`, `Chef`, `Manager`, `Waiter`, `Chef`];
const roles = [...new Set(staff)]; //Convert a new set into an array
console.log(roles);
console.log(`Our restaurant have total of ${new Set(staff).size} roles`);

//The another datatype, compare to set, we use map
//The map allow us to use a key to reference to a specific value
const rest = new Map();
console.log(rest.set(1, `Howard`)); //by set up a reference key and value, the expression can be directly print, so we can concat them

//Both the key and the directed values can be any expression
console.log(
  rest.set(2, `Miku`).set(3, `Kaito`).set(true, `Rin`).set(false, `Len`)
);

//By enter the key, we retreive the directed value
console.log(rest.get(1));

console.log(rest.has(1)); //check if the key is contain inside the map(must be KEY)

console.log(rest.delete(1)); //delete the key inside the map (must be KEY

console.log(rest.size); //return the size of the map

//For objects
const tempArr = [1, 2]; //Object is not primitive type and stored in a heap
rest.set(tempArr, `Luka`); //if we don't create a variable for the object, even if we do the same like [1,2], they are still pointed to different address to the heap
console.log(tempArr);

//we can even link the interface with value using map
rest.set(document.querySelector('h1'), `heading`);

//we can convert object properties into map:
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Note, that map is also iterables
for (const [key, value] of rest) console.log(rest.get(key)); //direct return a object contain 1 key and 1 value
//By destructuring, we can only use the key and return the value

//Convert the map back into array:
const mapArr = [...rest];
console.log(mapArr); //in form of 2d array that contain a key and its correspond value in each place of element

console.log(rest.values());

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// const events = [...new Set(gameEvents)];
/* console.log(gameEvents);
const events = [...new Set(gameEvents)];
console.log(events);

const eventArr = new Set()
for(const [time,event] of events)
{
  eventArr.add(event);
}
console.log([...eventArr]); */

/* const eventsSet = new Set();
for (const [time, events] of gameEvents) eventsSet.add(events);
const events = [...eventsSet];
console.log(events); */

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

for (const [time, events] of gameEvents)
  time < 45
    ? console.log(`[FIRST HALF] ${time} : ${events}`)
    : console.log(`[Second HALF] ${time} : ${events}`);

const vocaloid = `Miku`;
console.log(vocaloid[0]); //return the first letter from the string

console.log(vocaloid.length); //you can also return the length of the string in letter

console.log(vocaloid.indexOf(`u`)); //return the position of the specific letter in the string

console.log(vocaloid.lastIndexOf('u')); //retrun the position of the specific letter in the string that counts backward

console.log(vocaloid.indexOf(`ku`)); //by using indexOf, you can also search for a set of letters or a word

//The method slice will take the input index number and print all the content of the string starting from the specific index of the string
//The same as substring in JAVA
console.log('Vocaloid VI Engine'.slice(9, 12));

//splict word that was block by spaces:
const engine = `Vocaloid VI Engine`;
console.log(engine.slice(0, engine.indexOf(' ')));

//if you put in a negative value for the string slice, it will count the letter from the end
console.log(engine.slice(-6)); //count from the end : `ne`, P.S: does not start form 0

console.log(engine.slice(0, -6)); //by using negative value count from the last, you are basically cutting the index from the end
//still not start from 1 instead of 0

const checkMiddleSeat = function (seat) {
  //seat.indexOf(`B`) !== -1 || seat.indexOf(`E`) !== -1
  seat.slice(-1) === `B` || seat.slice(-1) === `E`
    ? console.log('Middle Seat!!! 😭')
    : console.log(`Not a middle seat!!! Luckyyyyyyyyyyy! 🥳`);
};

checkMiddleSeat(`69F`);
checkMiddleSeat(`19E`);
checkMiddleSeat(`85B`);

console.log(vocaloid.toLowerCase()); //Change all letters to lowercase
console.log(vocaloid.toUpperCase()); //Change all letters to uppercase

//fix wording error
const corrctifyEmail = `howard@student.mtsac.edu`;
const email = '     HowaRd@student.MTSAC.eDu \n';
const trimEmail = email.toLowerCase().trim();
console.log(trimEmail); //trim() remove all meaningless contents(space, new line)
console.log(trimEmail === corrctifyEmail);

//trimStart() only remove spaces from the begining of the string e.g: " Hello World " => "Hello World "
//trimEnd() only remove spaces from the end of the string e.g: " Hello World " => " Hello World"

const priceCN = `698,519￥`;
const prcieUS = priceCN.replace(`￥`, `$`); //replace the first input parameter with the second parameter in the string
console.log(prcieUS);
//replace() only replace the first letter it met, to replace all of the letter, we use replaceAll() method

console.log(vocaloid.includes(`Vocaloid`)); //return boolean type and check if the variable contain the following string.
console.log(vocaloid.startsWith(`Vocaloid`)); //return boolean type and check if the variable start with the following string.
console.log(vocaloid.endsWith(`Vocaloid`)); //return boolean type and check if the variable end with the following string.

//split() method
console.log(`Splict this line by spaces`.split(' ')); //split the called string by the input keyword, and store all in an array

//join() method
console.log([`Mr.`, `Howard`, `Yao`.toUpperCase()].join(' '));
//The join method must be called by a array and a divide string in between, it will concat all elements from the array to form a new string

const capName = function (name) {
  //Change the first letter of each word to upper case and other to lower case
  const names = name.split(' ');
  const capArray = [];
  for (const i of names) {
    capArray.push(i[0].toUpperCase() + i.slice(1).toLowerCase());
    //or
    //capArray.push(i.replace(i[0],i[0].toUpperCase()));
  }
  return capArray.join(' ');
};

console.log(capName('hoWard yao'));

//padding
//padding method will fill in the character
console.log(`Howard`.padStart(10, ' ').padEnd(14, ' '));

//mask credit card
const maskCredit = function (number) {
  const string = number + '';
  console.log(string.slice(-4).padStart(string.length, '*'));
};

maskCredit(1029019201);

//repeat method allow us to repeat certain message (string) multiple times
console.log('Miku LOVE!!!!'.repeat(3));

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

/* document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  let textArr = text.split('_');
  textArr[0] = textArr[0].toLowerCase();
  //console.log(textArr[0]);
  for (let i = 1; i < textArr.length; i++) {
    textArr[i] = textArr[i][0].toUpperCase() + textArr[i].slice(1);
  }

  console.log(textArr.join(''));
}); */

const camelCase = function (word) {
  let wordArr = word.split(`_`);
  wordArr[0] = wordArr[0].toLowerCase();
  for (let i = 1; i < wordArr.length; i++) {
    wordArr[i] =
      wordArr[i][0].toUpperCase() + wordArr[i].slice(1).toLowerCase();
  }
  return wordArr.join('');
};

document.querySelector('button').addEventListener('click', function () {
  let counter = 1;
  const text = document.querySelector('textarea').value;
  let textArr = text.split('\n');
  for (const i of textArr) {
    console.log(camelCase(i).trim().padEnd(20, ' ') + '✅'.repeat(counter));
    counter++;
  }
});

//////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const handleFlights = function (info) {
  const separateInfo = info.split(';');
  const flightType = separateInfo[0].split('_').join(' ');
  const flightFrom = separateInfo[1].slice(0, 3).toUpperCase();
  const flightTo = separateInfo[2].slice(0, 3).toUpperCase();
  const flightTime = separateInfo[3].split(':');

  return `${
    flightType.startsWith(' Delayed') ? `🔴` : ''
  } ${flightType} from ${flightFrom} to ${flightTo} (${flightTime[0]}h${
    flightTime[1]
  })`;
};

//padding is = to 45
const separateFlights = flights.split('+');
for (const i of separateFlights) {
  console.log(handleFlights(i).padStart(45, ' '));
}
>>>>>>> Stashed changes
