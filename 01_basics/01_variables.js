const accountId = 144556;
let accountEmail = "anjalniraula@iic.edu.np";
var accountPassword = "123";
accountCity = "Dulari";

let accountState;

// accountId = 2;    // not allowed
accountEmail = "anjalniraula334@gmail.com";
accountPassword = "234";
accountCity = "Ilam";

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/