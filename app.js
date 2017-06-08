"use strict";

var hasDogs = prompt('Does Ian have any dogs? Yes/No or Y/N');

var lowerCase = hasDogs.toLowerCase();

  if (lowerCase === 'yes' || lowerCase === 'y') {
    alert('Awesome! Ian has 3 dogs!');
  } else {
    alert('Ahhh, nope! Ian has 3 dogs!');
  }

console.log('asks question about ian\'s dogs and inserts the users input')


var listen = prompt('Does Ian listen to music? Yes/No or Y/N');

var listenCase = listen.toLowerCase();

  if (listenCase === 'yes' || listenCase === 'y') {
    alert('Awesome, yeah! Ian listens to all sorts of music!');
  } else {
    alert('What!?! Of course Ian listens to music!');
  }

console.log('asks question about ian listening to music and accepts the users input')


var favColor = prompt('Does Ian have a favorite color? Yes/No or Y/N');

var colorCase = favColor.toLowerCase();

  if (colorCase === 'yes' || colorCase === 'y') {
    alert('Correct! Who doesn\'t am I right?!');
  } else {
    alert('Incorrect.');
  }

console.log('asks question about having a favorite color')


var ianDrive = prompt('Does Ian drive to school? Please answer Yes/No or Y/N');

var driveCase = ianDrive.toLowerCase();

  if (driveCase === 'no' || driveCase === 'n') {
    alert('Correct, Ian does not drive to class - he rides the bus!');
  } else {
    alert('Incorrect! Ian takes the bus to class.');
  }

console.log('asks question about if Ian drives to class and makes No or N the correct answer')


var ianDrinks = prompt('Does Ian drink a bunch of beer before class? Please answer Yes/No or Y/N');

var drinkCase = ianDrinks.toLowerCase();

  if (drinkCase === 'no' || drinkCase === 'n') {
    alert('You are soooooo correct! Who would drink a bunch of beer first thing in the morning?! Especially before coming to class!!!');
  } else {
    alert('Nice try... Makes me think you enjoy drinking some beer in the morning!');
  }

console.log('asks question about ian consuming alchohol before class and looks for No or N as the correct answer')

// Begin lab question 6
var ianDrinks = parseInt(prompt('How many 40oz of beers did Ian drink before class? Make sure you are answering the question using numbers (ex: "1", "2", "3", etc...)'));

var counter = 0;

  while (counter != 3){
      if(ianDrinks < 5 || ianDrinks > 5){
        alert('Nice try... Guess again');
        counter++
        ianDrinks = parseInt(prompt('How many 40oz of beers did Ian drink before class?'));
    } else if(ianDrinks === 5){
      alert('You are soooooo correct! Ian drank 5 40oz of 211 Steele Reserve before class this morning!');
      counter = 3;
    } else {
      alert('Sorry you ran out of guesses.');
      counter = 3;
    }

  console.log('asks question about ian consuming alchohol before class and gives the user 4 guesses');
}

// Begin Question 7
var totalRight = 0;
var tries = 6;
var userName = prompt('What is your name?');

while (tries > 0){
  var sports = ['Hockey', 'Football'];
  var question = prompt('Ian has a couple of favorite sports, can you guess one of them?');
  console.log('get here');


  var answers = false;
      console.log('got here');
     for (var i = 0; i<sports.length; i++){
         sports[i];
         if (question === sports[i]){
           answers = true;
           totalRight += 1;
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
           alert(userName + ', it took you ' + tries + ' tries to get ' + totalRight + ' correct answer!');
         }
