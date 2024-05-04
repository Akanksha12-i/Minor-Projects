let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userDisplay=document.querySelector("#user-score");
let compDisplay=document.querySelector("#comp-score");
let userwinnum=document.querySelector("#user-score").innerText;
let compwinnum=document.querySelector("#comp-score").innerText;

const gencom_choice=()=>{
    let option=["rock","paper","scissor"];
    const idx=Math.floor(Math.random()*3);
    return option[idx];
}

const showWinner=(userwin,user_choice,comp_choice)=>{
if(userwin){
    userwinnum++;
    msg.innerText=`You Won:),Your ${user_choice} beat Computer's ${comp_choice}`;
    msg.style.backgroundColor="green";
    userDisplay.innerText=userwinnum;
}else{
    compwinnum++;
    msg.innerText=`You Lose!!,Computer's ${comp_choice} beat Your ${user_choice}`;
    msg.style.backgroundColor="red";
    compDisplay.innerText=compwinnum;
}
} 

const drawGame=()=>{
    msg.innerText="..Game Draw..";
    msg.style.backgroundColor="#081b31";
}
playGame=(user_choice)=>{
    const comp_choice =gencom_choice();
    if(user_choice===comp_choice){
        drawGame();

    }else{
        let userwin=true;
     if(user_choice==="rock"){
      userwin= comp_choice==="paper"?false:true;
     }
     if(user_choice==="paper"){
        userwin= comp_choice==="scissor"?false:true;
       }
       if(user_choice==="scissor"){
        userwin= comp_choice==="rock"?false:true;
       }
     showWinner(userwin,user_choice,comp_choice);
    }
    
}
choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const user_choice=choice.getAttribute("id");
   
    playGame(user_choice);
})
});