// question 1
var string1 = "Just a random string"
// question 2
var person = {
  name: "Per",
  age: 49
};
// question 3
var outOfStock = false;
if (outOfStock === true){
  console.log("Out of stock");
}
else {
  console.log("In stock");
}
// question 4
var numbers = [2, 4, 1, 5, 19];
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// question 5
for (var i = 15; i <= 25; i++) {
  console.log(i);
}
// question 6
for (var i = 15; i <= 25; i++) {
  if (i === 20) {
    console.log(i);
  }
}
// question 7
var players = [
  {
    nickname: "Saved",
    attendance: 80,
    attuned: true
  },
  {
    nickname: "Hacky",
    attendance: 58,
    attuned: false
  }
];
for (var i = 0; i < players.length; i++) {
  console.log(players[i].attendance);
  console.log(players[i].attuned);
}
// question 8
function whatIDontLike(dislikes) {
  console.log("I don't like " + dislikes);
}
whatIDontLike("Covid-19");
// question 9
function subtraction(a, b) {
  console.log(a - b);
}
// question 10
var myArray = [];
function myFunction(myArgument) {
  myArray.push(myArgument);
}
myFunction(2);
