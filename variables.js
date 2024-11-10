const accountId = 14453
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; 
/* 
Var is not used more nowadays. Prefer not to use var
Use only const and let for declaring variables.
*/



console.log(accountId)

accountEmail="xyz@gmail.com"
accountCity = "Delhi"

console.table([accountId, accountEmail, accountCity, accountPassword, accountState]);