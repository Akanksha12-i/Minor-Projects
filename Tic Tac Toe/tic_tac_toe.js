let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset_btn");
let new_btn=document.querySelector("#new_btn");
let msg_container=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true; //Player 1 ,Player 2
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],    //Patterns needed to win the game...
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){       //ie. turn0===true
            turn0=false;
            box.innerText="X";
            box.classList.add("box-c2");
            box.classList.remove("box-c1");
        } else{
            turn0=true;
            box.innerText="O";
            box.classList.add("box-c1");
            box.classList.remove("box-c2");
        }
        box.disabled=true; //This is done so that once X or 0 is placed, it then can not be--- 
                               //---altered when clicking again..
   
   check_winner();
                            });
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;  //Function for disaling the box classes...
    }
}

const resetgame=()=>{
    turn0=true;
enableboxes();
msg_container.classList.add("hide");
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;  //Function for disaling the box classes...
    box.innerText="";
    }
}
const showWinner=(Winner)=>{
msg.innerText=`Congratulations, Winner is ${Winner}`;
msg_container.classList.remove("hide");
disableboxes();
};
const check_winner= () => {
    for(let pattern of winPatterns){
       
        let val1=boxes[pattern[0]].innerText;
        let val2= boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 &&val2===val3){
                console.log("Winner is",val1);
                showWinner(val1);
            }
        }
    }
};
 //Here functions are triggered when clicked on reset or new game..
 reset.addEventListener("click",resetgame);
 new_btn.addEventListener("click",resetgame);

