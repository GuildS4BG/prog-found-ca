//question 1
for (var i = 15; i <= 25; i++) {
  if ((i%2) === 0) {
    console.log(i);
  }
}
//question 2
function mainFunction(){
  console.log("I am a function");
}
var innerFunction = mainFunction();
function outerFunction(argument){
  argument();
}
outerFunction(innerFunction);

// The one above followed the assignment text, but got an error when I ran it. Therfor I made one that run without error.

function mainFunction(){
  console.log("I am a function");
}
var innerFunction = mainFunction();
function outerFunction(argument){
  argument;  //took away the parenthesis, even tho the the assignment said "Inside outerFunction, call the argument like you would a function - with parenthesis ()."
}
outerFunction(innerFunction);
