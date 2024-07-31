let boxes = document.querySelectorAll(".box");
let rst = document.querySelector(".butn");
let win = document.querySelector(".winner");

let turnO = true;
const winPatterns =  [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach( (box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})
const showWinner = (winner) => {
    win.innerText = `Winner: ${winner}`
} 
const disable = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enable = () => {
    for(let box of boxes){
        box.disabled = false;
    }
}
const changeVals = () => {
    for (let box of boxes){
        box.innerText = "";
    }
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if (pos1val == pos2val && pos2val == pos3val){
                console.log("Winner", pos1val);
                disable();
                showWinner(pos1val);
            }
        }
    }
}
rst.addEventListener("click", () => {
    turnO = true;
    win.innerText = "Winner: ";
    changeVals();
    enable();
})
