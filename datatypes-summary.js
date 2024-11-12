// #Primitive 

//7types: String , Number, boolean, null, symbol, BigInt


//Javascript is dynamically typed language
const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id == anotherId)

const bigNumber = 3456789123356n
console.log(typeof bigNumber)

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "chirag",
    age: 24,

}

const myFunction = function(){
    console.log("Hello world")
}
console.log(typeof myFunction)


//Rference type(Non primiive)

//Array. objects, functions