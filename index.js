let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgamebtn=document.querySelector("#new-btn");
let msgconatiner=document.querySelector(".msgcontainer");
let msg=document.querySelector("#message");

let turn0=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
  turn0=true;
  enabledBoxes();
  msgconatiner.classList.add("hide");
};

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgconatiner.classList.remove("hide");
    disabledBoxes();
};

const checkWinner=()=>{
    for(let pattern of winPatterns){
    let pos1value = boxes[pattern[0]].innerText;
    let pos2value = boxes[pattern[1]].innerText;
    let pos3value = boxes[pattern[2]].innerText;

    if(pos1value !="" && pos2value !="" && pos3value !=""){
        if(pos1value === pos2value && pos2value === pos3value){
            // console.log("Winner is ",pos1value);
            showWinner(pos1value);
        }
    }
}
};

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    // console.log("box was clicked");
    if(turn0){
        box.innerText="0";
        turn0=false;
    }
    else{
        box.innerText="X";
        turn0=true;
    }
    box.disabled=true;

   checkWinner();
  });
});

newgamebtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);