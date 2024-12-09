// Immediately Invoked function Expressions (IIFE)

// function chai(){
//     console.log(`DB connected`);
// }
// chai()

//iife function likhne ka tarika

(function chai(){ //named iife
    console.log(`DB connected`);
})(); // do iife likhne ke liye isme semicolon lagana compulsory hai ek function ko end karna hoga warna ye error dega

//Global scope ke pollution se problem hoti hai kayi bar usko hatane ke liye iife use karte hai
// waha par jo declaration hoti hai usse bachne ke liye

//FIRST () -> for function definition
//SECOND () -> for function call/ execution

//

( (name) => {  //simple iife
    console.log(`DB connected TWO ${name}`);
} )('chirag')

