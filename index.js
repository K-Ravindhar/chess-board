let board = document.getElementById("chessboard");

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    let square = document.createElement("div");
    square.classList.add("square");

    if ((row + col) % 2 === 0) {
      square.classList.add("white");
    } else {
      square.classList.add("black");
    }

    square.dataset.row = row;
    square.dataset.col = col;

    board.appendChild(square);
  }
}

let coin = '';

document.getElementById('innerContainer').addEventListener('click',function(event){
  clearBackground();
  document.getElementById('pawn').style.background = 'transparent';
  document.getElementById('rook').style.background = 'transparent';
  document.getElementById('knight').style.background = 'transparent';
  document.getElementById('bishop').style.background = 'transparent';
  document.getElementById('queen').style.background = 'transparent';
  document.getElementById('king').style.background = 'transparent';

  coin = event.target.textContent.trim();
  event.target.style.backgroundColor = "green";
});


document.querySelectorAll(".square").forEach((square) => {
  square.addEventListener("click", function () {
    let row = parseInt(square.dataset.row);
    let column = parseInt(square.dataset.col);
    if(coin === 'Bishop'){
      clearBackground();
      bishopMove(row,column);
    } else if(coin === 'Rook'){
      clearBackground();
      rookMove(row,column);
    } else if(coin === 'Knight'){
      clearBackground();
      knightMove(row,column);
    } else if(coin === 'Queen'){
      clearBackground();
      queenMove(row,column);
    } else if(coin === 'King'){
      clearBackground();
      kingMove(row,column);
    } else if(coin === 'Pawn'){
      clearBackground();
      pawn(row,column);
    } else{
      alert('please select a coin');
    }
  });
});

function highlight(row, column) {
  let target = document.querySelector(
    `[data-row = '${row}'][data-col = '${column}']`
  );
  target.classList.add("highlight");
}

function clearBackground() {
  document.querySelectorAll(".highlight").forEach((square) => {
    square.classList.remove("highlight");
  });
}

function pawn(row,column){
  // clearBackground();

    if((row+1) <= 7){
        highlight(row+1,column);
    }
    
}

function kingMove(row,column){
    // clearBackground();

    highlight(row,column);

    let directions =[
        [-1,0],
        [-1,-1],
        [-1,1],
        [0,-1],
        [0,1],
        [1,0],
        [1,-1],
        [1,1]
    ];

    directions.forEach(([rowMove,columnMove]) => {
        let rowIndex = row;
        let columnIndex = column;

        rowIndex += rowMove;
        columnIndex += columnMove;

        if(!(rowIndex < 0 || rowIndex > 7 || columnIndex < 0 || columnIndex > 7)){
            highlight(rowIndex,columnIndex);
        }
    })
}

function queenMove(row, column) {
  // clearBackground();
  rookMove(row, column);
  bishopMove(row, column);
}

function rookMove(row, column) {
  // clearBackground();

  highlight(row, column);

  let directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  directions.forEach(([rowMove, columnMove]) => {
    let rowIndex = row;
    let columnIndex = column;

    while (true) {
      rowIndex += rowMove;
      columnIndex += columnMove;

      if (rowIndex < 0 || rowIndex > 7 || columnIndex < 0 || columnIndex > 7) {
        break;
      }

      highlight(rowIndex, columnIndex);
    }
  });
}

function knightMove(row, column) {
  // clearBackground();

  highlight(row, column);

  let directions = [
    [-1, -2],
    [-2, -1],
    [-1, 2],
    [-2, 1],
    [1, 2],
    [2, 1],
    [1, -2],
    [2, -1],
  ];

  directions.forEach(([rowMove, columnMove]) => {
    let rowIndex = row;
    let columnIndex = column;

    rowIndex += rowMove;
    columnIndex += columnMove;

    if (!(rowIndex < 0 || rowIndex > 7 || columnIndex < 0 || columnIndex > 7)) {
      highlight(rowIndex, columnIndex);
    }
  });
}

function bishopMove(row, column) {
  // clearBackground();

  highlight(row, column);

  let directions = [
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];

  directions.forEach(([rowMove, columnMove]) => {
    let rowIndex = row;
    let colIndex = column;

    while (true) {
      rowIndex += rowMove;
      colIndex += columnMove;

      if (rowIndex < 0 || rowIndex > 7 || colIndex < 0 || colIndex > 7) {
        break;
      }

      highlight(rowIndex, colIndex);
    }
  });
}
