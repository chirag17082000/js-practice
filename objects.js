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

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //GreetingTwo function me humne isme string interpolation kiya -> text ko double quotes hatakar back tick lagadiye (below esc symbol)
}
console.log(JsUser.greeting());
// console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());

