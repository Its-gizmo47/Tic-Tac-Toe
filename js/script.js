let boxes = document.querySelectorAll(".box");
let winner = document.querySelector(".winner");
let winCaption = document.querySelector("#win-caption");
let newGame = document.querySelector("#new-game");
let resetGame = document.querySelector("#reset-game");

let turnO = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let disableBox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
let enableBox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        count = 0;
        winner.classList.add("class", "hide");
    }
}

for(let box of boxes){
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            box.style.color = "#7a74b0"
            turnO = false;
        } else{
            box.innerText = "X";
            box.style.color = "#996a6e"
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = chkWinner();
        if(!isWinner && count === 9){
            gameDraw();
        }
    });
}
const chkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if( pos1Val != "" && pos2Val != "" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                winner.classList.remove("class", "hide");
                winCaption.innerText = `Winner is ${pos1Val}`;
                disableBox();
            }
        }
    }
}
const gameDraw = () =>{
    winCaption.innerText = "Game Draw";
    winner.classList.remove("class", "hide");
}

newGame.addEventListener("click", enableBox);
resetGame.addEventListener("click", enableBox);
