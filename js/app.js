'use strict';
console.log('Mine Sweeper');


const SIZE = 4;
const mine = 'X'
var  NOMINE = '@';
var isShown = false;
var gBoard = [];
var gGameInterval = null;



function initGame() {
    clearInterval(gGameInterval);
    gBoard = buildBoard(SIZE);
    renderBoard(gBoard);
    gGameInterval = setInterval(1000);
    countNegs();

}


function cellClicked(elTD, rowIdx, colIdx) {
    if (gBoard[rowIdx][colIdx] === board) elTD.innerHTML = 'XXX';
}



function buildBoard(SIZE) {
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board[i] = [];
        for (var j = 0; j < SIZE; j++) {
            board[i][j] =[];
        }
    }
    board[2][3] = mine;
    board[1][2] = mine;

    console.table(board);
    return board;
    
}

function renderBoard(board) {

    var strHTML = '';
    for (var i = 0; i < board.length; i++) {
        strHTML += `<tr>`;
        for (var j = 0; j < board[0].length; j++) {
            var className = (board[i][j]) ? 'occupied' : '';
            strHTML += `<td
            class="cell-${i}-${j} ${className}"
            onclick=cellClicked(this,${i},${j})>
            ${board[i][j]}
            </td>`;
        }
        strHTML += `</tr>`;
    }
    var elBoard = document.querySelector('.board');
    elBoard.innerHTML = strHTML;
}

function countNegs(posI, posJ) {
    var minesCount = 0;
    for (var i = posI - 1; i <= posI + 1; i++) {
        if (i < 0 || i >= gBoard.length) continue;
        for (var j = posJ - 1; j <= posJ + 1; j++) {
            if (j < 0 || j >= gBoard.length) continue;
            if (i === posI && j === posJ) continue;
            if (gBoard[i][j] === board) 
            minesCount++
        }
    }
    return minesCount
} 


// function play() {
//     renderBoard(gBoard)
// }


function clearMyInterval() {
    clearInterval(gGameInterval)
}