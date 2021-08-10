let firstCard = getRandomCard();
let secondCard = getRandomCard();  
let sum = firstCard + secondCard; 
let cards = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let startButtonP = document.getElementById("start-game");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// display cards played
let cardsEl = document.getElementById("cards-el");

let player = {
    name: "Usha",
    chips: 21
}


let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": " + "N" +  player.chips;



function getRandomCard(){
   let output = Math.floor(Math.random()*14) + 1;
   if (output < 2) {
       return 11;
   } else if (output > 10) {
       return 10;
   } else {
        return output;
   }
    
}

// function start game
function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]; 
    sum = firstCard + secondCard;
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
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    } 
}

let course = {
    title: "Introduction to programming",
    lessons: 15,
    creator: "Nawill Technology Limited",
    instructor: "Ushahemba Shir",
    length: 63,
    isFree: true,
    tags: ["General Intro","html", "css", "JavaScript"]
}

console.log(course.tags[0]); //html
