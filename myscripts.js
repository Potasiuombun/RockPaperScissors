// Animation
const buttons = document.querySelectorAll("[data-key]");
buttons.forEach(button=> {
    button.addEventListener("click",()=> {
        const buttonId = button.dataset.dataKey;
        button.classList.add("button-clicked");
        if(counter > previousCounter){
            previousCounter++;
            if (playerWins === 5) {
                console.log("I got at player WIns 5")
                playerWins = 0;
                computerWins= 0;
                counter = 0;
                previousCounter = 0;
                cWins.textContent = 0
                pWins.textConten = 0
                allWins.textContent = "Player Won"
            }
            if (computerWins === 5){
                console.log("I got at computer WIns 5")
                playerWins = 0;
                computerWins= 0;
                counter = 0;
                previousCounter = 0;
                cWins.textContent = 0
                pWins.textConten = 0
                allWins.textContent = "Computer Won"
            }
            playRound(playerPick,computerPlay())
        }
        
    })
})
buttons.forEach(button=>{
    button.addEventListener("transitionend",removeTransition);
})

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('button-clicked');
}


// Pick for the computer
function computerPlay(){
    const options = ["ROCK","PAPER","SCISSORS"];
    let i = Math.floor(Math.random() * 3);
    return options[i]
}

// Assign value to playerPick
function value(myPick){
    let pick = myPick
    if (pick==="ROCK")
    {
        return 0;
    }
    else if(pick ==="PAPER")
    {
        return 1;
    }
    else{
        return 2;
    }
}
// Get user pick

let playerWins = 0;
let computerWins= 0;
let counter = 0;
let previousCounter = 0;
let playerPick;
const rock = document.getElementById("Rock")
const paper = document.getElementById("Paper")
const scissor = document.getElementById("Scissors")

const display = document.getElementsByClassName("wins")
const cWins = document.createElement("h2")
const pWins = document.createElement("h2")
const allWins = document.createElement("h2")
cWins.textContent = computerWins
pWins.textContent = playerWins
allWins.textContent = "No one"

display[0].appendChild(cWins)
display[1].appendChild(pWins)
display[2].appendChild(allWins)

rock.addEventListener("click",getRock);
paper.addEventListener("click",getPap);
scissor.addEventListener("click",getSci);

function getRock(){
    playerPick = "ROCK"
    counter++;

    return playerPick
}

function getPap(){
    playerPick = "PAPER"
    counter++

    return playerPick
}
function getSci(){
    playerPick = "SCISSORS"
    counter++
    return playerPick
}


// Play the round once
function playRound(player, computer)
{
    let a = player
    let b = computer
    console.log(a)
    console.log(b)
    if ((value(a)+1)%3 === value(b))
    {   //computer wins
        console.log("computerWins")
        computerWins++;
        cWins.textContent = computerWins
        return 1
    }
    else if (a === b){
        //draw
        console.log("Draw")
        return 0
    }
    else{
        //platyer wins
        playerWins++;
        console.log("playerWins")
        pWins.textContent = playerWins
        return 2
    }
    // If a is paper -> 3 options
    // if a is rock -> 2 options
}



