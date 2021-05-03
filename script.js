//Creat an array{2,3,4,5,6,7,8,9,10,J,Q,K,A};
const cardsValues=["2","3","4","5","6","7","8","9","10","11"];

//Definite variable
let playerScoresInTotal=0;
let dealerScoresInTotal=0;
let playerHand = [];
let dealerHand = [];
const playingDeck = [];
const playerScore = document.getElementById("playerScore");
const dealerScore = document.getElementById("dealerScore");
const playerCard = document.getElementById("playerCard");
const dealerCard = document.getElementById("dealerCard");


//Random pick up two elements from the array and give them to the player;
//Show the values separately,
//Save the values and add them in total scores;



const randomChoice = () => {
    const randomIndex = Math.floor(Math.random() * cardsValues.length);
    return cardsValues[randomIndex];
};
playerScoresInTotal+=randomChoice();

playerScoresInTotal+=randomChoice();

dealerScoresInTotal+=randomChoice();

dealerScoresInTotal+=randomChoice();




const displayValue=()=>{
            playerHandElementHTML.innerHTML=randomChoice();
    }

    displayValue();

//Random pick up two elements from the array and give them to the computer;
//Calculate player's scores(If one element's value is lower than 10 or equal to 10, A's value=11;otherwise A's value=1)
//Display the scores on the screen;
//Calculate computer's scores
//If player's score or computer's score is 21, the player wins/the computer wins.
