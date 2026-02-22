function createGrid() {
    const gridContainer = document.getElementById("grid-container");

    for (let i = 0; i < 16; i++) {
        let gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        for (let j = 0; j < 16; j++) {
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            gridRow.appendChild(gridSquare);
        }
        gridContainer.appendChild(gridRow);
    }
}
createGrid();