let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGamebtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".message-container");
let msg = document.querySelector("#msg");
let drawMsg = document.querySelector("#draw-msg");


let turn0 =true;
let clickcount =0;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]

];

const resetGame = () => {
    turn0 =true;
    clickcount=0;
    enableBoxes();
    msgContainer.classList.add("hide");
    drawMsg.classList.add("hide");
    msg.classList.add("hide");
    msg.innerText = "";


}



boxes.forEach((box) =>{
    box.addEventListener("click" , ()=>{

        if(turn0){
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        clickcount++;
        checkWinner();
    })
})

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner) =>{
    msg.innerText = `congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide"); 
    drawMsg.classList.add("hide");
    disableBoxes();

}

const showDraw = () => {
    msg.innerText = ""; 
    msg.classList.add("hide"); 
    drawMsg.classList.remove("hide");
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>{
    for(let pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val ===pos2val && pos2val ===pos3val){
                showWinner(pos1val);
            }
        }

    }
    if (clickcount === 9) {
        showDraw();
    }
}


newGamebtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);