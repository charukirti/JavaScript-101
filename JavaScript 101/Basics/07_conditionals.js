// ** To perform condition based operations we need to perform conditionals like 'if', 'if-else', '?' ;

// ** If :
/* in if block the condition in parentheses is evaluated, if the result is true, executes the block of code */

// let yrar = 2022;
// if(yrar==2020) {
// console.log("You are not allowed for this JOB.");
// }

// ** else :
/* if the condition of the if block get's false, then the statement in else block will be executed */

// let year = 2020;
// if(year % 4 == 0) {
//     console.log("Year is leap year.");
// }else{
//     console.log("Year is not leap year.");
// }

// ! Exercise

// TODO: check the username and password entered by the user is correct or not

// let userName = "charles";
// let password = "123456x$d";

// if(userName == 'charles' && password == '123456x$d') {
//     console.log("Logged In Successfully !");
// }else {
//     console.log("Invalid Log In Credentials.");
// }

// if(userName == 'charles' && password == '123456x$d') {
//     console.log("Logged in succesfully !");
// } else if(userName != 'charles') {
//     console.log("Username is incorrect.");
// } else if(password != '123456x$d') {
//     console.log("Password is incorrect");
// }else {
//     console.log("Invalid login credentials.");
// }

let username = "charukirti@11";
let password = "quantamRealm13";

if (username == "charukirti@11") {
  if (password == "quantamRealm22") {
    console.log("Welcome, Successfully logged in.");
  } else if (password == "" || password == null) {
    console.log("Please enter password to continue.");
  } else {
    console.log("Incorrect password.");
  }
} else if (username == "" || username == null) {
  console.log("Please enter username to continue.");
} else {
  console.log("Incorrect username");
}
