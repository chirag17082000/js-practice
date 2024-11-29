// singleton -> jab koi constructor se object bnate hai toh ek hi tarah ka object banta hai (ye apni tarah ka ek hi object hai)
// Object.create();
//object literals
const mySym = Symbol("Key1");


const JsUser = {
    name : "Chirag",
    "full name" : "Chirag Kaushik",
    [mySym] : "myKey1", //symbol ko agar object me as key add karna hai to is tarah se daalenge 
    age : 20,
    city : "delhi",
    isLoggedIn : "false",
    lastLoggedIndays : ["Monday", "Wednesday"]
};
// console.log(JsUser);
// console.log(JsUser.name);

// console.log(JsUser["name"]);

// console.log(JsUser["full name"]);
// console.log( typeof JsUser.mySym);
// console.log( typeof JsUser[mySym]);


// Object.freeze(JsUser); //freeze kardeg iske bad object me koi changes nhi kar payenge
// JsUser.name = "Rammehar";
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`); //GreetingTwo function me humne isme string interpolation kiya -> text ko double quotes hatakar back tick lagadiye (below esc symbol)
// }
// console.log(JsUser.greeting());
// // console.log(JsUser.greeting);
// console.log(JsUser.greetingTwo());

// Create object using constructor

//const tinderUser = new Object(); //-? ye singleton object hai 

const tinderUser = {}; // ye non singleton object hai

tinderUser.id = "12345"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = "false"

// //console.log(tinderUser);

// const regularUser = {
//     email : "abcd@yoppmail.com",
//     fullname : {
//         userfullname : {
//             firstname : "chirag",
//             lastname : "Kaushik"
//         }
//     }
// }
// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.firstname)

// //Optional chaining  -> to check value exist or not if getting response from API -> use this syntax -> if else lgane se bach jate hai

// // console.log(regularUser.fullname?.userfullname.firstname)

// OBJECT ASSIGN MDN DOCS
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
//const obj3 = {obj1, obj2};
//TO merge 3 objects -> ek empty array use karte hai kya pta humare aur jyada values bhi ho sakti hai
// const obj3 = Object.assign({}, obj1, obj2);
//  console.log(obj3);

const obj3 = {...obj1, ...obj2};
console.log(obj3);

//Jab data database se atta hai tab

const users = [
    {
        id : 1,
        email: "xyz@gmail.com"
    },
    {
        id : 1,
        email: "xyz@gmail.com"
    },
    {
        id : 1,
        email: "xyz@gmail.com"
    }

]

//console.log(users[1].id);

console.log(Object.keys(tinderUser)); //ye hume array bnadega object ki jispar hum loop laga payenge
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//Some time we try to access some values which are null or not accessible -> which results to crash
// Check property available or not
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// To check different function/ Properties avaialble in object then we can check in browser -> inspect tab -> create new object -> check prototype differnt

