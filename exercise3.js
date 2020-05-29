//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is empty, the output should be true, otherwise it should return false. 



//your code...
const isStrEmpty = (str) => !str ? true : false;






/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). Replace a word so that the output uses the new word instead (e.g., ‘Learning JavaScript is cool!). 



//your code...
let string = 'hockey is awesome'
string = string.replace('awesome', 'great')



/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with the squared value of each number from the first array. Use an arrow function and one of the built-in array methods. 



//your code...
const arr = () => {
    let arr1 = [100, 200, 300, 400, 500]
    return arr1.map(e => e * e)
}



/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5. Write a JavaScript program that returns an array of the numbers that are greater than 3. Use an arrow function and one of the built-in array methods.



//your code...

let numbers = [1, 3, 5, 7, 9, 1, 3, 5]

let filter = (arr) => arr.filter(e => e > 3 ? e:null)

console.log(filter(numbers))


/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. Write a JavaScript program that returns the sum of those numbers. Use an arrow function and one of the built-in array methods. 



//your code...
let nums = [5, 10, 6, 378, 46]
const reduce = arr => arr.reduce((acc, curr)=> acc+ + curr, 0)





/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 

// Write a function that takes in a DNA string as a parameter and returns an array with the complementary strand. For example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].  



//your code...

const dna = str => {
    let arr = str.split('')
    let g = arr.filter(val => val === "G"); 
    let c = arr.filter(val => val === "C"); 
    let a = arr.filter(val => val === "A"); 
    let t = arr.filter(val => val === "T"); 
    let part1 = []
    let part2 = []
    for ( let i = 0; i<g.length; i++ ) {
       part1.push(c[i], g[i])
    }
    for ( let i = 0; i<g.length; i++ ) {
       part2.push(a[i], t[i])
    }
    return [...part1, ...part2] 
 }




/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
const numbers1 = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

function maxNumber(numbers) {
    let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    for(let i = 0; i < numbers.length; i++){
        if(nums.includes(numbers[i])){
            let found = nums.indexOf(numbers[i])
            numbers.splice(i,1,found)
        }
    }
    let sorted = numbers.map(e => parseFloat(e))
    let filtered = sorted.filter(e => !!e === true)
    return Math.max(...filtered)
}

// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order

function sortNums(numbers, desc=false) {
    return numbers.sort((a,b)=> b-a)
};



/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.  The key is the example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

const mapObj = new Map();
mapObj.set('company : "TEKsystems"',"object");
mapObj.set(['hockey', 'golf', '14'], 'array');
mapObj.set('soccer', 'string')
mapObj.set(true, 'boolean')
mapObj.set(99, 'int')
mapObj.set(() => 'arrow function', 'arrow function' )

console.log(mapObj.has())
console.log(mapObj.has('company : "TEKsystems"'));  
//The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code on line 106, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.

console.log('The code prints false because "Setting Object properties works for Map objects as well, and can cause considerable confusion. ...But, it does not behave as expected", direct quote from MDN')
//your code...

//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']

let mapObjValues = []
mapObj.forEach((val, key) => {
    mapObjValues.push(val)
})
console.log(mapObjValues)
/************************************************************* */
//Problem 11:

let ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
//reverse the array, without modifying the ones array.
let onesReverse = [...ones].reverse()

console.log(onesReverse)
console.log(ones)

/************************************************************* */
//Problem 12:
//create a function called performer(cb) that takes in a callback function and runs that callback function.  It should return the output of the callback function.

function performer(cb) {
    let message = 'My age is '
    return cb(message)
}


/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.
