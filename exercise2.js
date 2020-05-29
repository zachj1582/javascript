//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//

for(let i=0; i<10; i++) {
    console.log(" the value of i in the loop is : " + i);
}


//your code...
let i = 0;
while(i<10) {
    console.log(" the value of i in the loop is : " + i)
    i++;
}



/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

//your code...

const sum = function(){
    return 30 + 2;
}

const product = function(){
    return sum() * 20;
}

const divided = function(){
    return product() / Math.pow(10, 2);
}

console.log(sum())
console.log(product())
console.log(divided())

/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
// values : 
console.log(`20, truthy because it is a number value`) // 20 
console.log(`0, falsy because it has no value`)// 0
console.log(`zero, truthy because it is a string`)// "zero";
const zero = 20; console.log(`${zero}, truthy because it has a value of 20`)
console.log(`null, falsy because null has no value`)// null
console.log(`"0", truthy because it is a string`)// "0"
console.log(`!"", truthy because it is opposite of a empty string`)// !""
console.log(`{}, truthy because it's a created object`)// {}
console.log(`${() => {console.log("hello TEKcamp!")}}, truthy because its an arrow function. Or falsy if it's supposed to be missing the closing curly brace`)
console.log(`125, is truthy because its a number`) // 125
console.log(`undefined, is falsy because it references something with no assigned value`)// undefined
console.log(`"", falsy because the string has no assigned value`)// ""




/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:

const day = "friday";

// if(day === "monday") {
//     console.log("we got a long week ahead of us...");
// } else if(day === "tuesday") {
//     console.log("tuesday's are still beterr than mondays, but LONG way to go still");
// } else if (day === "wednesday") {
//     console.log("We are smack dab in the middle of the week");
// } else if (day === "thursday") {
//     console.log("Thursday night... the mood is right");
// } else if (day === "friday") {
//     console.log("TGIF.  Friday truly is the best day of the week!")
// } else {
//     console.log("It's a weekend!")
// }

switch(day) {
    case 'monday':
        console.log("we got a long week ahead of us...")
        break;
    case 'tuesday':
        console.log("tuesday's are still beterr than mondays, but LONG way to go still")
        break;
    case 'wednesday':
        console.log("We are smack dab in the middle of the week")
        break;
    case 'thursday':
        console.log("Thursday night... the mood is right")
        break;
    case 'friday':
        console.log("TGIF.  Friday truly is the best day of the week!")
        break;
    default:
        console.log("It's a weekend!")
}



/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:
const age = 10;

console.log(age > 21 ? "adult" : "minor")
// if (age > 21) console.log("adult"); else {
//     console.log("minor");
// }

console.log(age > 13 && age < 19 ? "teen" : "not a teenager")
// if (age > 13 && age < 19) console.log('teen'); else {
//     console.log("not a teenager");
// };

console.log(age > 65 ? 'retired' : 'still working')
// if (age > 65) console.log("retired"); else {
//     console.log("still working...");
// }


/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize the 'this' keyword.
*/

//your code...
const person = {
    name: 'Zach Johnson',
    age: `that's rude to ask...`,
    gender: 'male',
    hobbies: 'sports, reading, coding obviously :) ',
    profession: 'student / aspiring software developer',
    education: 'TEKcamp',
    learn: function(){
        console.log(this.name)
    },
    aboutStatement: function(){
        console.log(`${this.name} loves ${this.hobbies} and is currently a ${this.profession} at ${this.education}.`)
    }
}

// person.aboutStatement()

/************************************************************* */
// Problem 6: Create an object literal that represents any object in the real world that you like.  Try to come up with a realistic set of properties and methods that would accurately describe that object.  In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.  

//your code...
const harryPotter = {
    synopsis: 'Boy wizard continuously breaks every school rule with his friends and gets commended for it.',
    hero: 'Harry Potter (duh)',
    antagonist: `Lord Voldemort aka 'He who must not be named'.`,
    friends: 'Ron and Hermione',
    family: `The Dursley's (we don't like them).`,
    pseudoFamily: `The Weasley's, including Ron, twin brothers Fred and George (also breaks all the rules), mother: Molly and father: Arthur.`,
    likes: ['beating Voldemort in the least likely of ways', 'playing Quidditch', 'beating Voldemort in an obvious way', 'not getting in trouble', 'getting in to trouble', 'visiting Hagrid', 'collecting chocolate frog cards'],
    whatIsHeDoingToday: function(){
        let r = Math.floor(Math.random() * this.likes.length - 1)
        return `Today Harry is ${this.likes[r]}`
    },
    dislikes: ['getting attacked by Voldemort', 'getting attacked by Dementors', 'potions class with professor Snape', "Summers with the Dursley's", 'anything involving Draco Malfoy', 'anything involving Dolores Umbridge', `not getting graded on creativity`],
    magicalItems: [`Bertie Bott's every flavor beans`, `Fred and George's joke wand`, `Sneak-a-scope`, 'Firebolt broomstick', 'Ton Tongue Toffee', 'Quick quotes quill', 'a bludger'],
    nextAdventure: function(){
        let r = Math.floor(Math.random() * this.likes.length - 1)
        let a;
        if(Math.floor(r / 2)=== 1){
            a = this.friends
        } else if (Math.floor(r / 2)===2){
            a = this.pseudoFamily
        } else {
            a = this.friends
        }
        return 'Today ' + this.hero + ' is with ' + a + ' fighting off ' + this.dislikes[r] + ', our unlucky group only has ' + this.magicalItems[r] + ' to battle this terror! It must have worked out though because they were not late for their ' + this.likes[r] + ' appointment! We are sure it was a close call however...' 
    }
}

console.log(harryPotter.nextAdventure())
console.log(harryPotter.whatIsHeDoingToday())

/************************************************************* */
//Problem 7: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.

//your code...
let favorites = () => {
    console.log([], 'great data srorage container with great built in methods')
    console.log({}, 'same as arrays, react would not work without objects')
    console.log('strings', 'strings are fun to manipulate')
}


/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that takes another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

function multiple(x){
    return function inner(y){
        let sum = x * y
        return y * 3
    }
}
//your code...


// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

//your code...
const stockGain = basis => {
    let message= " is how much the stock has increased"
    return function years(yrs){
        let growthRate = 5
        let interestTimes = 4
        let base = 1 + growthRate / (100*interestTimes)
        let exponent = interestTimes*yrs
        console.log(basis*Math.pow(base, exponent) + message)
    }
}

let futureValue = stockGain(15000)(9)