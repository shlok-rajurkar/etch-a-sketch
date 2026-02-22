function createResponsiveGrid(gridSize) {
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
        if (target.classList.contains("grid-square")) {
            target.classList.add("traversed");
        }
    })
}

function main() {
    createResponsiveGrid(16);

    const changeSizeButton = document.getElementById("change-grid-size");

    changeSizeButton.addEventListener("click", () => {
        let newSize = prompt("Input new grid size between 0 and 100.");

        if (newSize > 100 || newSize < 1) {
            newSize = 100;
        }

        const gridContainer = document.getElementById("grid-container");

        while (gridContainer.firstChild) {
            gridContainer.firstChild.remove();
        }

        createResponsiveGrid(newSize);
    })
}

main()