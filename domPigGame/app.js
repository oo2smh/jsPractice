// GAME RULES:
//
// - The game has 2 players, playing in rounds
// - In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
// - BUT, if the player rolls a 1, all his ROUND score gets lo st. After that, it's the next player's turn
// - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
// - The first player to reach 100 points on GLOBAL score wins the game
//
//

// 🧠
// Math.random = gives you a random # between 0 & 1
  // multiply the number by 6 to give you a number between 0 & 6
// Math.floor = rounds decimals down into a whole number
  // Math.floor(Math.random() * 6) + 1
// setter - sets the value 🧪 var x = document.querySelector()
// getter - gets the value 🧪 document.querySelector is a getter

// 🐎
//

var scores, roundScore, activePlayer;

scores = [];
roundScore = 0;
activePlayer = 1;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener( 'click', function() {
  //random #
  var dice = Math.floor( Math.random() * 6 + 1 );
  //display number
  var diceDom = document.querySelector('.dice');
  diceDom.style.display = 'block';
  diceDom.src = 'dice-' + dice + '.png'
  //conditional - display # only if it's not a 1
  if (dice !== 1) {
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = dice;
    // add the score
  } else {
    // switch player
    activePlayer === 0 ? activePlayer === 1 : activePlayer === 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
  }
