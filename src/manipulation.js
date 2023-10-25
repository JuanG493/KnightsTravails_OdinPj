import { resolver } from "./index.js";

let board = document.querySelector(".board");
let sendBtn = document.querySelector(".subBtn");
let resetBtn = document.querySelector(".resetBtn");
let leftNums = document.querySelector(".leftNums");
let buttonNums = document.querySelector(".buttonNums");
let startPoint = [];
let targetPoint = [];
let pointResult;

//  draw the board
function drawBoard() {
  for (let i = 7; i >= 0; i--) {
    drawIndicator(i);
    for (let j = 0; j <= 7; j++) {
      let square = document.createElement("div");
      square.setAttribute("class", "square");
      square.setAttribute("data", `${i},${j}`);
      board.appendChild(square);
    }
  }
}
drawBoard();

function drawIndicator(indice) {
  let lat = document.createElement("div");
  lat.classList.add("ind");
  lat.innerText = indice;
  leftNums.appendChild(lat);
  let bott = document.createElement("div");
  bott.classList.add("bott");
  bott.innerText = indice;
  buttonNums.appendChild(bott);
}

//  set the event to the squares
let smallSq = document.querySelectorAll(".square");
smallSq.forEach((sq) => {
  sq.addEventListener("click", () => {
    console.log(sq.attributes.data.value);
  });
});

//  when send it´s click
sendBtn.addEventListener("click", () => {
  //prevent the botton to be double click
  sendBtn.disabled = true;
  startPoint.length = 0;
  targetPoint.length = 0;
  let inputUsr = document.querySelectorAll("input");
  for (let inp of inputUsr) {
    if (startPoint.length <= 1) {
      startPoint.push(+inp.value);
    } else {
      targetPoint.push(+inp.value);
    }
  }
  //    call the resolver
  pointResult = resolver(startPoint, targetPoint);
  drawMoves(pointResult);
});

async function drawMoves(coordinates) {
  let large = Object.keys(coordinates).length;
  for (let i = 1; i < large; i++) {
    let points = coordinates[i].join();
    console.log(points);
    let squarePath = document.querySelector(`div[data="${points}"]`);
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(squarePath.classList.add("travel"));
        if (i == 1) {
          squarePath.innerText = "START";
          squarePath.classList.add("start");
        } else if (i == large - 1) {
          squarePath.innerText = "META";
          squarePath.classList.add("meta");
          sendBtn.disabled = false;
        } else {
          squarePath.innerText = i - 1;
        }
      }, 1000)
    );
  }
}
//  when reset it´s click
resetBtn.addEventListener("click", () => {
  board.innerHTML = "";
  leftNums.innerHTML = "";
  buttonNums.innerHTML = "";
  drawBoard();
});

export { drawBoard };
