
// // function markCells(board) {
// //     // query select them one by one and add mark
// //     for (var i=0; i < SIZE.length; i++){
// //         var marked = board[i];
// //         var elCell = document.querySelector(getSelector(marked));
// //         elCell.classList.add(['mark']);
// //     } 
// // }
// // // Gets a string such as:  'cell-2-7' and returns {i:2, j:7}
// // function getCellCoord(strCellId) {
// //     var coord = {};
// //     coord.i = +strCellId.substring(5, strCellId.lastIndexOf('-'));
// //     coord.j = +strCellId.substring(strCellId.lastIndexOf('-') + 1);
// //     console.log('coord', coord);
// //     return coord;
// // }


// function Cell( row, column, opened, flagged, mined, neighborMineCount ) 
// {
// 	return {
// 		id: row + "" + column,
// 		row: row,
// 		column: column,	
// 		opened: opened,
// 		flagged: flagged,
// 		mined: mined,
// 		neighborMineCount: neighborMineCount
// 	}
// }
