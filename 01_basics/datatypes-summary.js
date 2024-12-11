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

//*********************************** */

//Stack(Primitive), Heap(Non Primitive)

  let companyName = "Tata Consultancy"

  let anotherName = companyName
  anotherName = "Osmosys"
  console.log(companyName)
  console.log(anotherName)

  let user = {
    email : "abc@gmail.com",
    upiId : "123@ybl.com"
  }

  let user2 = user;
  user2.email= "xyz@cloud.com"
  console.log(user2)