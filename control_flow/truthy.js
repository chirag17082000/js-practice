// const userEmail = "chirag@gmail.com"
// const userEmail = ""
const userEmail = []


// Jab variable ke anadr koi value hai toh hum use truthy value maan lete hai
// if(userEmail){
//     console.log("Got user Email")
// }
// else{
//     console.log("Don't have user email")
// }
// falsy values

// -> false, 0(zero), -0(negative zero), BigInt 0n, "", null, undefined, NaN

//Truthy values

// -> "0", 'false', " ", [], {}, function(){}, 

// if(userEmail.length === 0){

//     console.log("Array is empty");
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Objkect is empty")
// } 

// console.log(false == 0)
// console.log(false == '')
// console.log(0 == '')

// Nullish coa;escing operator (??): null undefined

// isko jab use karenge jab kisi database se value koi aa rahi hogi warna default value null assignn kardenge
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1)

//Ternary operator 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >=100 ? console.log("Less than 80") : console.log(`More than 80`)