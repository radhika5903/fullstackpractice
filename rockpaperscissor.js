let userScore=0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
const msg= document.querySelector("#msg"); 

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () =>{
    const options= ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const drawGame=() =>{
    msg.innerText = "It's a draw! Play again!";
    msg.style.backgroundColor ="black";
};

const showWinner=(userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else if(!userWin){
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =` You lost. ${compChoice} beats your ${userChoice}, Please try Again`;
        msg.style.backgroundColor = "blue";

    }
}
const playGame =(userChoice) =>{
    const compChoice = genComputerChoice();
    

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock"){
            userWin=compChoice==="paper" ? false : true;
    }
    else if(userChoice === "paper"){
            userWin=compChoice==="scissors" ? false : true;
    }
    else{
        userWin=compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice= choice.getAttribute("id");
    playGame(userChoice);
    });
})