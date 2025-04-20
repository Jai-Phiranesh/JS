'use strict';

// console.log(document.querySelector('.message'));
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 13;
// document.querySelector('.guess').value;

let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highScore=0;
const displayMessage = function(message){
  document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('No Number');
  } 
  
  else if (guess === number) {
    displayMessage('Correct Number');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent=number;
    document.querySelector('.number').style.width = '30rem';

    if(score>highScore){
      highScore=score;
    }
    document.querySelector('.highscore').textContent=highScore;
  } 

  else if(!guess === number){
    if (score > 1) {
      displayMessage(guess>number?'Too High':'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Lost the Game');
    }
  }
  
  // else if (guess > number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'Lost the Game';
  //   }
  // } 
  
  // else if (guess < number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'Lost the Game';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click',function(){
  score=20;
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  displayMessage('Start Guesing.....');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent='?';
  document.querySelector('.guess').value='';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

});
