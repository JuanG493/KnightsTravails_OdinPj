let board = document.querySelector(".board");
// board.textContent = "jaudfn"

console.log("testing");
let elm = [[0,1,2,3,4,5,6,7], [0,1,2,3,4,5,6,7]];

let prevBoard = document.createElement("div");
for(let i = 0; i < elm.length; i ++){
    for(let j = 0; i < i.length; j++){
        let square = document.createElement("div");
        square.setAttribute("class", "testing"); 
        board.appendChild(square);
    }

}
export {board}