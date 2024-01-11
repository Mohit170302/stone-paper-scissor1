let userScore=0;
let compScore=0;


const choices=document.querySelectorAll(".choice");

const userScorePara=document.querySelector("#user-s");

const compScorePara=document.querySelector("#Comp-s");

const msg=document.querySelector("#msg")

const getCompChoice=()=>{
    const option=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3); //random*3=occur random decimal number(eg-2.3985767,1.9848577)between0-2,floor convert desimal in integer(2,1)
    //r,p,s
return option[randIdx];

}
const drawGam=()=>{
    
    msg.innerText="Game was draw.Play again!"
    msg.style.backgroundColor="#081b31"
}

const showWinner=(userWin,userChoice,comChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win!");
         msg.innerText=`You Win! Your ${userChoice} beats ${comChoice}`;
         msg.style.backgroundColor="green"
    }else{
        compScore++;
        compScorePara.innerText=compScore
        console.log("you lose!");
        msg.innerText=`You Lose! ${comChoice} beats Your ${userChoice}`
        msg.style.backgroundColor="red"
    }
}

const playGame=(userChoice)=>{
   
//Generate computer choice
const comChoice=getCompChoice();


if(userChoice===comChoice){
       drawGam();
}else{
    let userWin=true;
    if(userChoice==="rock"){
        //scissor,paper
       userWin= comChoice=="paper"?false:true;
    }else if(userChoice==="paper"){
        //rock,scissor
       userWin= comChoice==="scissors"?false:true;
    }else {
        //rock,paper
       userWin= comChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,comChoice);
}
};

choices.forEach((choice)=>{
    
    choice.addEventListener("click", () =>{
        const userChoice=choice.getAttribute("id");
        
        playGame(userChoice);

    });
});