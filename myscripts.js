function computerPlay(){
    const options = ["ROCK","PAPER","SCISSORS"];
    let i = Math.floor(Math.random() * 3);
    return options[i]
}

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
function checkPick(myPick)
{
    let pick = myPick.toUpperCase();
    if (pick == "ROCK" || pick =="SCISSORS" || pick == "PAPER")
    {
        return 1
    }
    else
    {
        return 0
    }
}


function playerSelect(){
    let pick;
    do{
        pick = window.prompt("Enter your pick:");
    }while(checkPick(pick)!==1)

    return pick.toUpperCase();
}

let b = computerPlay().toUpperCase();

let a = playerSelect().toUpperCase();
console.log(a, b)
function playRound(player, computer)
{
    let a = player
    let b = computer

    if ((value(a)+1) %3 === value(b))
    {
        return "Computer won"
    }
    else if (a === b){
        return "Draw"
    }
    else{
        return "Player won"
    }
    // If a is paper -> 3 options
    // if a is rock -> 2 options
}

let result = playRound(a,b);
console.log(result)