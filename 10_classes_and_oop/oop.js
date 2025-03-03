const user = {
    userName : "Chirag",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`Username: ${this.userName}`);
        
    }
}
// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);


// const promiseOne = new Promise()
// const date = new Date()

function User(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = new User("Chirag", 12, true)
const userTwo = new User("Chaiaurcode", 11, false)
console.log(userOne.constructor);
// console.log(userTwo)

