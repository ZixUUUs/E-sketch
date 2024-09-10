const grid = document.querySelector(".grid");
const GRIDWTH = grid.offsetWidth;
const GRIDHGT = grid.offsetHeight;
const colored = document.querySelector(".colored");

const cell = document.querySelector(".input");
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
    return nul;
  }
}
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getGridCells() {
  let dim = cellDimension();

  if (!dim) return;

  for (let i = 0; i < dim * dim; i++) {
    const gridCell = document.createElement("div");
    gridCell.style.width = `${GRIDWTH / dim - 2}px`;
    gridCell.style.height = `${GRIDHGT / dim - 2}px`;
    gridCell.classList.add("squares");
    grid.appendChild(gridCell);

    gridCell.addEventListener("mouseover", function () {
      if (colored.onclick) {
        return (gridCell.style.backgroundColor = getRandomColor());
      } else {
        gridCell.style.backgroundColor = menu.onchange();
      }
    });
  }
}
