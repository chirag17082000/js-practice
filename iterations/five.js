const coding = ["js", "ruby", "java", "python", "cpp"]
//callback function ka koi naam nhi hota hai -> jo ye forech ke andar function likh ahi ye hi call back function hai iske through hum array par iterate kar sakte hai
// coding.forEach( function (val){
//     console.log(val);
// })

// coding.forEach(  (val) => {

//     console.log(val.length);
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe);

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })

// hum kab is tarah se array iterate karte hai toh humare pas sab cheez ka access hota hai like item, index, array

const myCoding = [
    {
        languageName : "Javascript",
        languageFile : "js",
    },
    {
        languageName : "java",
        languageFile : "java",
    },
    {
        languageName : "cpp",
        languageFile : "c",
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFile);
})