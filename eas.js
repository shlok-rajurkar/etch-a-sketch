function createGrid(gridN) {
    const gridContainer = document.getElementById("grid-container");

    for (let i = 0; i < gridN; i++) {
        let gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        for (let j = 0; j < gridN; j++) {
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            gridRow.appendChild(gridSquare);
        }
        gridContainer.appendChild(gridRow);
    }
}
createGrid(16);

