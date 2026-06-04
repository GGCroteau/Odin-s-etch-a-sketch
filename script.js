function createGrid(nbSquares){
    //const size = document.querySelector(".container").clientWidth/nbSquares;
    const size = 100/nbSquares;
    //adjust .square width / height
    document.documentElement.style.setProperty("--square-size", `${size}%`);

    //create the grid of squares
    for(let j=0; j<nbSquares; j++){
        createRow(j);
        for(let i=0; i<nbSquares; i++){
            createSquare(size, j);
        }   
    }
}

function createRow(rowNb){
    const row = document.createElement("div");
    row.classList.add("row");
    row.classList.add(`row-${rowNb}`);

    document.querySelector(".container").appendChild(row);
}

function createSquare(size, rowNb){
    const square = document.createElement("div");
    square.classList.add("square");
    document.querySelector(`.row-${rowNb}`).appendChild(square);
}

createGrid(16);