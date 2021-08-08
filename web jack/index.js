let firstCard = getRandomCard();
let secondCard = getRandomCard();   
let cards = [firstCard, secondCard]; 
let sum = firstCard + secondCard;

let startButtonP = document.getElementById("start-game");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// display cards played
let cardsEl = document.getElementById("cards-el");

function getRandomCard(){
   let output = Math.floor(Math.random()*14) + 1;
    return output;
}

// function start game
function startGame(){
    renderGame();
}

// start game function
function renderGame(){
    cardsEl.textContent = "Cards:  ";
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    // sum of cards
    sumEl.textContent = "Sum: " + sum;
  
    if (sum <= 20){
        message = "Do you want a drawn card";
    } else if (sum === 21){
        message = "Wohoo! You've got Blackjack";
    } else {
        message = "You are out of the game";
    }
    messageEl.textContent = message;
}

// new card function
function newCard(){
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
}

// let radomNumber = Math.floor(Math.random() * 6) + 1;
//     console.log(radomNumber);


// function rollDice() {
//    return Math.floor(Math.random() * 6) + 1;
// }
// console.log(rollDice());



