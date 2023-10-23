import {resolver} from "./moves"

let board = document.querySelector(".board");
let sendBtn = document.querySelector(".subBtn");
let startPoint = [];
let targetPoint = [];
let pointResult;

sendBtn.addEventListener("click", () =>{
    startPoint.length = 0;
    targetPoint.length = 0;
    let inputUsr = document.querySelectorAll("input");
    for(let inp of inputUsr){
        if(startPoint.length <= 1){
            startPoint.push(+inp.value)
        }else{
            targetPoint.push(+inp.value)
        }
    };
    pointResult = resolver(startPoint, targetPoint);
    drawMoves(pointResult);

    // console.log("star: ", startPoint);
    // console.log("target: ", targetPoint);
    // console.log("resolver : ", tst);
})

function drawMoves(coordinates){
    for(let mov of coordinates ){
        document.querySelector()
        console.log(typeof(mov));
        console.log(mov);
    }
}

// let moves = 
// board.textContent = "jaudfn"

// console.log("testing prbando ");
// let elm = [[0,1,2,3,4,5,6,7], [0,1,2,3,4,5,6,7]];

// console.log(elm.length);
let prevBoard = document.createElement("div");
for(let i = 7; i >= 0; i --){
    // console.log(i);
    // console.log(elm[i].length);
    for(let j = 0; j <= 7; j++){
        // console.log(j);
        let square = document.createElement("div");
        

        square.setAttribute("class", "square"); 
        square.setAttribute("data",`${i},${j}` );
        // square.innerText = `${i},${j}`
        board.appendChild(square);
    }

}
board.appendChild(prevBoard)


let smallSq = document.querySelectorAll(".square");
smallSq.forEach(sq => {
    sq.addEventListener("click", () =>{
        console.log(sq.attributes.data.value);
    })
});





export {board}