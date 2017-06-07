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
