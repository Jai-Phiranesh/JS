'use strict';

const player0el = document.querySelector('.player--0');
const player1el = document.querySelector('.player--1');
const score0el = document.querySelector('#score--0');
const score1el = document.getElementById('score--1');
const current0el = document.getElementById('current--0');
const current1el = document.getElementById('current--1');

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let score, currentScore, activePlayer, play;
const init= function(){
    score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  play = true;

  score0el.textContent = 0;
  score1el.textContent = 0;
  current0el.textContent = 0;
  current1el.textContent = 0;

  dice.classList.add('hidden');
  player0el.classList.remove('player--winner');
  player1el.classList.remove('player--winner');
  player0el.classList.add('player--active');
  player1el.classList.remove('player--active');
}
init();

const swap=function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0;
    activePlayer = activePlayer===0?1:0;
    player0el.classList.toggle('player--active');
    player1el.classList.toggle('player--active');
}

score0el.textContent=0;
score1el.textContent=0;

dice.classList.add('hidden');

btnRoll.addEventListener('click',function(){
    if(play){
        let diceNum = Math.trunc(Math.random()*6)+1;
    console.log(diceNum);
    dice.classList.remove('hidden');

    dice.src=`dice-${diceNum}.png`;

    if(diceNum!==1){
        currentScore+=diceNum;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    }
    else{
        swap();
    }
    }  
});


btnHold.addEventListener('click',function(){
    if(play){
    score[activePlayer]+=currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];
    if(score[activePlayer]>=20){
        dice.classList.add('hidden');
        play=false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }else{
        swap();
    }
}
    


});


btnNew.addEventListener('click',init);