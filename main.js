let rockDiv = document.getElementById('rock');
let paperDiv = document.getElementById('paper');
let scissorsDiv = document.getElementById('scissors');
let UserScorespan = document.getElementById('user-score');
let CompScorespan = document.getElementById('computer-score');
let HumanChoice;
let UserScore = 0;
let CompScore = 0;
UserScorespan.innerText = UserScore
CompScorespan.innerText = CompScore


function updateScore(){
    UserScorespan.innerText = UserScore
    CompScorespan.innerText = CompScore
}





function ComputerChoice(){
    const tools = ['rock', 'scissors', 'paper'];
    const randomNum = Math.floor(Math.random() * 3)
    const choice = tools[randomNum];
    return choice;
}

function tie(){
   UserScore ++
   CompScore ++
   updateScore()
}

function win(){
  UserScore ++
  updateScore()
}

function lose(){
   CompScore++
   updateScore()
}



function game(userChoice){
 let comp = ComputerChoice();

 if (comp == 'rock' && userChoice == 'paper'){
    win()
 }
 else if (comp == 'rock' && userChoice == 'scissors'){
    lose()
 }
 else if (comp == 'paper' && userChoice == 'rock'){
    lose()
 }
 else if (comp == 'paper' && userChoice == 'scissors'){
    win()
 }
 else if (comp == 'scissors' && userChoice == 'paper'){
    lose()
 }
 else if (comp == 'scissors' && userChoice == 'rock'){
    win()
 }
 else{
    tie()
 }


}





rockDiv.addEventListener('click', function(){
    game('rock')
})

paperDiv.addEventListener('click', function(){
    game('paper')
})

scissorsDiv.addEventListener('click', function(){
    game('paper')
})



    


        