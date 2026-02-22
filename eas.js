function createGrid(gridSize, shadeable) {
    const gridContainer = document.getElementById("grid-container");
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.id = "grid";
    for (let i = 0; i < gridSize; i++) {
        let gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        for (let j = 0; j < gridSize; j++) {
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            if (shadeable) {
                gridSquare.classList.add("shadable");
            }
            gridRow.appendChild(gridSquare);
        }
        grid.appendChild(gridRow);
    }
    gridContainer.appendChild(grid);
}

function addBinaryBlackColoring() {
    const gridContainer = document.getElementById("grid");
    gridContainer.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.classList.contains("grid-square")) {
        target.classList.add("traversed");
    }
})
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function addRainbowColoring() {
    const gridContainer = document.getElementById("grid");
    gridContainer.addEventListener("mouseover", (event) => {
        let target = event.target;
        if (target.classList.contains("grid-square") && !target.classList.contains("traversed-rainbow")) {
            target.style.backgroundColor = getRandomColor();
            target.classList.add("traversed-rainbow");
        }
    })
}


function addGradualShading() {
    const gridContainer = document.getElementById("grid");
    gridContainer.addEventListener("mouseover", (event) => {
        let target = event.target;
        if (target.classList.contains("grid-square")) {
            if (!target.classList.contains("traversed")) {
                target.opacity = 0;
                target.backgroundColor = "black";
            }
            let currentOpacity = Number.parseFloat(globalThis.getComputedStyle(target).opacity);
            console.log(currentOpacity);
            if (currentOpacity < 1 && target.classList.contains("grid-square")) {
                target.style.opacity = currentOpacity + .1;
            }
            if (!target.classList.contains("traversed")) {
                target.classList.add("traversed");
            }
        }
    })
}

function clearGrid() {
    const gridContainer = document.getElementById("grid-container");

    while (gridContainer.firstChild) {
        gridContainer.firstChild.remove();
    }
}

function main() {
    createGrid(16, false);
    addBinaryBlackColoring();

    let currentGridSize = 16;
    let currentColoringScheme = addBinaryBlackColoring;

    const changeSizeButton = document.getElementById("change-grid-size");
    const defaultColorButton = document.getElementById("set-normal-coloring");
    const rainbowColorButton = document.getElementById("set-rainbow-coloring");
    const shadingColorButton = document.getElementById("set-shading-coloring");

    changeSizeButton.addEventListener("click", () => {
        currentGridSize = prompt("Input new grid size between 0 and 100.");

        if (currentGridSize > 100 || currentGridSize < 1) {
            currentGridSize = 100;
        }

        clearGrid();
        if (currentColoringScheme == addGradualShading) {
            createGrid(currentGridSize, true);
        } else {
            createGrid(currentGridSize, false);
        }

        currentColoringScheme();
    })

    defaultColorButton.addEventListener("click", () => {
        clearGrid();
        createGrid(currentGridSize, false);
        addBinaryBlackColoring();
        currentColoringScheme = addBinaryBlackColoring;
    })

    rainbowColorButton.addEventListener("click", () => {
        clearGrid();
        createGrid(currentGridSize, false);
        addRainbowColoring();
        currentColoringScheme = addRainbowColoring;
    })

    shadingColorButton.addEventListener("click", () => {
        clearGrid();
        createGrid(currentGridSize, true);
        addGradualShading();
        currentColoringScheme = addGradualShading;
    })
    
}

main();