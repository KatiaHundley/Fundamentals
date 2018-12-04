//Booleans
//What is a boolean?
var on = true;
console.log(on); //true
let off = false;
console.log(off); //false

//boolean can represent: true/false, yes/no, on/off

//Null = empty value (not 0; not undefined)
var empty = null;
console.log(empty); // null

/*
We've talked before about how every variable is basically a storage container in JavaScript think of variables with null and undefined as packages coming out of
UPS null packages are packages that were interntionally packed up with nothing, but have been assembled  unfefined packages are packages

*/
//Numbers
var degrees = 90;
console.log(degrees);

var precise = 9999999999999; //15 9's
console.log(precise); //999999999999999

var rounded = 9999999999999999999999999; // (One more 9)
console.log(rounded); //1000000000000000

var notQuite = 0.2 + 0.1;
console.log(notQuite); // 0.300000000000004

var numbersareHArd = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numberAreHard); // 0.3

let stringOne = "double quotes";
let StringTwo = 'single quotes';
console.log(stringOne, stringTwo); //double quotes single quotes

// numbers vs, strings
let first = 1050 + 100;
console.log(first);
let second = '1050' + '100';
console.log(second);

console.log(first+second);
console.log(second);
console.log(typeof first);
console.log(typeof second);

/* addition vs. Concatenation

When JS sees combining two or more numbers, it adds the values together usind the built-in math functionality;  when it sees adding together one or more strings, it changes and the plus sign becomes an
assignament operator--it smashes the values together without trying to synthesize the values
*/


let third = 1050 + "100";
console.log(typeof third); //1050100
console.log(typeof third); // string

var firstName = "Katia";
var lastName = "Hundley";
console.log(firstName,lastName)
var houseNumber = 2000;
var street = Meridian;
var city = Indianapolis;
var state = Indiana;
var zipCode = 40000;
console.log(`${firstName} ${lastName}, \n${houseNumber} , ${street}, \n${city} ${state}, ${zipCode}`);

//Objects
/*
Whats is an object?

A container that can hold multiple datatypes

Denoted by {}
Has keys and values (color (key): blue (value)), separated with a colon.
Each key separeted with a comma
*/

let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
}
console.log(burritosNow);
console.log(typeof burritosNow); //object
/*
Arrays are great for lists

Denoted by []
Has values ('blue', 'green', 'yellow'), separeted with commas
/*

var burritos = ['large', 4, true]

console.log(typeof burritos); //OBJECT
*/


