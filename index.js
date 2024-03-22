let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let t = true;
let newbutton = document.querySelector("#new");
let upp = document.querySelector(".upper");
let msg = document.querySelector(".msg");

let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (t){
            box.innerText = "o";
            t= false;
        }
        else {
            box.innerText = "x";
            t = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const checkwinner = () => {
    for (let ele of win) {
        let one = boxes[ele[0]].innerText;
        let two = boxes[ele[1]].innerText;
        let three = boxes[ele[2]].innerText;

        if (one !== "" && two !== "" && three !== "") {
            if (one === two && two === three) {
                console.log(`${one} is the winner`);
                show(one);
                return; 
            }
        }
    }
};

const show = (winner)=>{
    msg.innerText = `winner is ${winner}`;
    upp.classList.remove("hide");

    // setTimeout(() => {
    //     disableBox(); 
    // }, 3000);
    


};


const resetgame = () =>{
    t= true;
    disableBox();
    enableBoxes();
    upp.classList.add("hide");
}


newbutton.addEventListener("click", resetgame);
reset.addEventListener("click"  ,resetgame);

const disableBox = () =>{
    for(let box of boxes){
        box.disabled = true;
        box.innerText = "";
        
    }

}
const enableBoxes= () =>{
    for(let box of boxes){
        box.disabled = false;
    }
}

