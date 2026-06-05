function createGrid(nbSquares){
    const size = 100/nbSquares;

    //adjust .square height and row width by modifying the var "--square-size" used in the css
    document.documentElement.style.setProperty("--square-size", `${size}%`);

    //create the grid of squares
    for(let j=0; j<nbSquares; j++){
        createRow(j);
        for(let i=0; i<nbSquares; i++){
            createSquare(size, j);
        }   
    }
}

function changeGridSize(){
    //prompt to get the size
    let newSize = prompt("Enter the new grid size (anywhere from 1 to 100)")
    if(newSize<1)
        newSize = 1;
    else if(newSize>100)
        newSize = 100;

    //delete the content of .container
    document.querySelector(".container").replaceChildren();

    //call createGrid with the gathered size
    createGrid(newSize);
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
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    });

    document.querySelector(`.row-${rowNb}`).appendChild(square);
}

createGrid(16);

const button = document.querySelector("button");
button.addEventListener("click", changeGridSize);