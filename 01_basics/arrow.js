// const user = {
//     username : "chirag",
//     price : 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         //console.log(this);
//     }
// } 

// user.welcomeMessage()
// user.username = "sam";
// user.welcomeMessage()
// console.log(this)
//Browser ke aandar jo global object hai wo ha WINDOW

// function chai(){
//     let username = "chirag";
//     console.log(this.username) // ye this keyword hum sirf object ke aandar use karte hai , function ke andar nhi kar payenge
// } 

// chai();

//ye normal function
// const chai = function() {
//     let username = "hitesh"
//     console.log(this.username);
// }


// ye hai arrow function

// const chai = () => {
//     let username = "hitesh"
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2; //explicit return
// }

//Agar curly braces use kiya toh return keyword likhna hi padega 
// Arrow function ko aise bhi likh sakte hai jisme one line function definition hoti hai 
//isme return keyword likhne ki need nhi hoti assume kar lete hai ki return likha hai
//const addTwo = (num1, num2) =>  num1 + num2

//const addTwo = (num1, num2) =>  (num1 + num2) //Implicit return 


console.log(addTwo(2,5));

const myArray = [2,3,4,5]

myArray.forEach(() => {})