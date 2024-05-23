const accountId = 13456
let accountEmail = "monuhp8@gmail.com"
var accountPassword = "12345"
accountCity = "chandigarh"
let accountState ;
//accountId = 2 //not allowed

/*
Prefer not to use var
beacuse of issue in block scope and  funcational scope
*/
accountEmail = "rajinder@ucodesfot.com"
accountPassword = "45678"
accountCity = "bilaspur"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
