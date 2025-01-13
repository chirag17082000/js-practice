let randomNumber = parseInt(Math.random()*100 + 1);
// console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Enter a valid number`);
    }else if(guess <0){
        alert(`Enter a number greater than 0`);
    }else if(guess > 100){
        alert(`Enter a number greater than 100`);
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game is over. random number is ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess == randomNumber){
        displayMessage(`You guessed it right`);
    }else if(guess < randomNumber){
        displayMessage(`Number is too Low`);
    }else{
        displayMessage(`Number is too High`);
    }
}

function displayGuess(guess){
    userInput.value = "";
    userInput.setAttribute('disabled', '');
    guessSlot.innerHTML += `${guess},`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame">Start New game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.randomNumber()*100 +1);
        prevGuess = [];
        numGuess =1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}