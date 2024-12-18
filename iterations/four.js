const myObj = {
    js : 'javascript',
    cpp: 'C++',
    rb : 'Ruby',
    swift : 'Swift by apple'
 }
//WE USE FOR IN LOOP FOR OBJECTS ALWAYS
 for (const key in myObj) {
        console.log(`${key} shortcut is for ${myObj[key]}`);
 }

 //ARRAYS KE LIYE FOR OF LOOP USE KARENGE

 const programming = ["js", "rb", "py", "java", "cpp"]

 for (const key in programming) {
    console.log(programming[key])
 }

 