const grid = document.querySelector(".grid");
const GRIDWTH = grid.offsetWidth;
const GRIDHGT = grid.offsetHeight;
const cell = document.querySelector(".input");
const colored = document.querySelector(".colored");
const clear = document.querySelector(".clear");

let clean = false;

let colorEnabled = false;

colored.addEventListener("click", function () {
  colorEnabled = !colorEnabled;
  return (colored.disabled = true);
});

clear.addEventListener("click", () => {
  clean = !clean;
  return (clear.disabled = true);
});

let form = document.forms["MyColor"];
let menu = form.colors;
let options = form.colors.options;

menu.onchange = function () {
  let choose = this.value;
  return choose;
};

function cellDimension() {
  const cellValue = cell.value;
  if (cellValue >= 16 && cellValue <= 64) {
    return cellValue;
  } else {
    alert("get a number from 16 => 64");
    return null;
  }
}
function getRandomColor() {
  const arrColor = [
    "blue",
    "black",
    "yellow",
    "green",
    "purple",
    "pink",
    "red",
  ];
  let randomChoose = Math.floor(Math.random() * arrColor.length);
  let randomColor = arrColor[randomChoose];
  return randomColor;
}

function getGridCells() {
  let dim = cellDimension();

  if (!dim) return;

  grid.innerHTML = "";

  for (let i = 0; i < dim * dim; i++) {
    const gridCell = document.createElement("div");
    gridCell.style.width = `${GRIDWTH / dim - 2}px`;
    gridCell.style.height = `${GRIDHGT / dim - 2}px`;
    gridCell.classList.add("squares");
    grid.appendChild(gridCell);

    gridCell.addEventListener("mouseover", function () {
      gridCell.style.backgroundColor = menu.onchange();
      if (colorEnabled) {
        gridCell.style.backgroundColor = getRandomColor();
      }
      if (clean) {
        gridCell.style.backgroundColor = "white";
      }
    });
  }
}
