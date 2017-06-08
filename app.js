'use strict';

// Question 1
function question1() {
var hasDogs = prompt('Does Ian have any dogs? Yes/No or Y/N');
var lowerCase = hasDogs.toLowerCase();
if (lowerCase === 'yes' || lowerCase === 'y') {
  alert('Awesome! Ian has 3 dogs!');
} else {
  alert('Ahhh, nope! Ian has 3 dogs!');
}
console.log('asks question about ian\'s dogs and inserts the users input');
}
question1();
// Question 2
function question2() {
var listen = prompt('Does Ian listen to music? Yes/No or Y/N');
var listenCase = listen.toLowerCase();

if (listenCase === 'yes' || listenCase === 'y') {
  alert('Awesome, yeah! Ian listens to all sorts of music!');
} else {
  alert('What!?! Of course Ian listens to music!');
}
console.log('asks question about ian listening to music and accepts the users input');
}
question2();
// Question 3
function question3() {
var favColor = prompt('Does Ian have a favorite color? Yes/No or Y/N');
var colorCase = favColor.toLowerCase();
if (colorCase === 'yes' || colorCase === 'y') {
  alert('Correct! Who doesn\'t am I right?!');
} else {
  alert('Incorrect.');
}
console.log('asks question about having a favorite color');
}
question3();

// Question 4
function question4() {
var ianDrive = prompt('Does Ian drive to school? Please answer Yes/No or Y/N');
var driveCase = ianDrive.toLowerCase();
if (driveCase === 'no' || driveCase === 'n') {
  alert('Correct, Ian does not drive to class - he rides the bus!');
} else {
  alert('Incorrect! Ian takes the bus to class.');
}
console.log('asks question about if Ian drives to class and makes No or N the correct answer');
}
question4();
// Question 5
function question5() {
var ianBeer = prompt('Does Ian drink a bunch of beer before class? Please answer Yes/No or Y/N');
var drinkCase = ianBeer.toLowerCase();
if (drinkCase === 'no' || drinkCase === 'n') {
  alert('You are soooooo correct! Who would drink a bunch of beer first thing in the morning?! Especially before coming to class!!!');
} else {
  alert('Nice try... Makes me think you enjoy drinking some beer in the morning!');
}
}
console.log('asks question about ian consuming alchohol before class and looks for No or N as the correct answer');
question5();

// Begin lab question 6
function question6() {
var counter = 4;
while (counter > 0){
  var ianDrinks = parseInt(prompt('How many 40oz of beers did Ian drink before class? Make sure you are answering the question using numbers (ex: "1", "2", "3", etc...)'));
  if(ianDrinks < 5 || ianDrinks > 5){
    alert('Nice try... Guess again');
    counter--;
  } else if(ianDrinks === 5){
    alert('You are soooooo correct! Ian drank 5 40oz of 211 Steele Reserve before class this morning!');
    counter = -1;
  } if (counter === 0){
    alert('Sorry you ran out of guesses.');
  }

  console.log('asks question about ian consuming alchohol before class and gives the user 4 guesses');
}
}
question6();
// Begin Question 7
function question7() {
var totalRight = 0;
var tries = 6;
var answers = false;
var userName = prompt('What is your name?');

while (tries > 0){
  var sports = ['Hockey', 'Football'];
  var question = prompt('Ian has a couple of favorite sports, can you guess one of them?');
  for (var i = 0; i < sports.length; i++){
    sports[i];
    if (question === sports[i]){
      answers = true;
      totalRight += 1;
      tries = -1;
      break;
    }
  }
  if (answers === true){
    alert('Awesome! ' + sports[0] + ' and ' + sports[1] + ' are Ian\'s favorite sports!');
    alert(userName + ', it took you ' + tries + ' tries to get ' + totalRight + ' correct answer!');
    break;
  } else {
    alert('Sorry! ' + question + ' is not one of Ians favorite sports. You have ' + tries + ' guesses left.');
    tries--;
  }
}
if (tries === 0){
  alert('Sorry you fail.');
}
}
question7();

// // //Teachers code
// //
// // var states = [];
// // var guess = 6;
// //
// // while(guess > 0) {
// //   guess--;
// //   var stateanswer = prompt();
// //
// //   for( var i = 0; i < states.length; i++) {
// //     if (stateanswer === states[i] || stateanswer === stateabb[i]){
// //       alert();
// //       guess = -1;
// //       break;
// //     }
// //   }
// // }
// //
// // if(guess > 0){
// //   alert('nope wrong you have this many guesses left');
// // }
// //
// // if(guess ){
// //
// // }
