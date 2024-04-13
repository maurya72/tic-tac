let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let turnO=true;
const winpattern=[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[6,4,2],
];
const showwinner=(winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");
        if(turnO==true){
            box.innerText="O";
            turnO=false;
        
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();

    })
    
});
const checkwinner=()=>{
    for(let pattern of winpattern){
        console.log(pattern)
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1==pos2&&pos2==pos3){
                showwinner(pos1);
            }
        }
    }

}
