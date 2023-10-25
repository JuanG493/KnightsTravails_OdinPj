import "./style.css";
import { drawBoard } from "./manipulation.js";

export function resolver(initialMove, targetMove) {
  // console.log("initial move:", initialMove);
  // console.log("target: ", targetMove);
  let pathResult;

  // let initialMove = [7, 7];
  // let targetMove = [0, 0];

  class Noddinson {
    constructor(value = null, parent = [null]) {
      this.parent = parent;
      this.value = value;
    }
  }

  function generatingMoves(initialMove, father = null) {
    // let newFatherr = [grant, initialMove];

    let listOfNodes = [];
    let one = [
      [initialMove[0] + 2, initialMove[1] + 1],
      [initialMove[0] + 1, initialMove[1] + 2],
      [initialMove[0] - 2, initialMove[1] - 1],
      [initialMove[0] - 1, initialMove[1] - 2],
      [initialMove[0] - 1, initialMove[1] + 2],
      [initialMove[0] + 1, initialMove[1] - 2],
      [initialMove[0] - 2, initialMove[1] + 1],
      [initialMove[0] + 2, initialMove[1] - 1],
    ];

    //  check it is a valid move insde of the frame
    //  make a node if the move it´s valid (L)
    one.forEach((elm) => {
      if (elm[0] <= 7 && elm[0] >= 0 && elm[1] <= 7 && elm[1] >= 0) {
        let nodito = new Noddinson(elm, father);
        listOfNodes.push(nodito);
        // listOfNodes.push(elm);
      }
    });
    return listOfNodes;
  }
  function checkwinner(nodes) {
    for (const noDo of nodes) {
      if (noDo.value[0] == targetMove[0] && noDo.value[1] == targetMove[1]) {
        pathResult = [...noDo.parent];
        pathResult.push(noDo.value);

        return true;
      }
    }
    return false;
  }

  function setFather(moves) {
    //  doing a shadow copy of the moves.parent
    let partial = [...moves.parent];
    partial.push(moves.value);
    return partial;
  }

  function findPath(movi) {
    if (checkwinner(movi)) {
      // listOfSteps.push(node[1]);
      return pathResult;
    } else {
      let newMoves = [];
      // let partial = [];
      for (const element of movi) {
        let parent = setFather(element);
        let moves = generatingMoves(element.value, parent);
        newMoves.push(...moves);
      }
      findPath(newMoves);
    }
  }
  // console.log(pathResult);

  let startM = new Noddinson(initialMove);
  findPath([startM]);
  return pathResult;
}
