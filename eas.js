function main(gridSize) {
    const gridContainer = document.getElementById("grid-container");
    for (let i = 0; i < gridSize; i++) {
        let gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        for (let j = 0; j < gridSize; j++) {
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            gridRow.appendChild(gridSquare);
        }
        gridContainer.appendChild(gridRow);
    }

    gridContainer.addEventListener("mouseover", (event) => {
        let target = event.target;
        target.classList.add("traversed");
    })
}

main(16);