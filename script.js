const table = document.getElementsByTagName("table")[0];
const addRowBtn = document.getElementById("add-row");
const newDraw = document.getElementById("newdraw");
const select = document.getElementsByTagName("select")[0];
let chosenColor = "red";
const makeRow = () => {
  const row = document.createElement("tr");
  for (let idx = 0; idx < 40; idx++) {
    const td = document.createElement("td");
    row.appendChild(td);
  }
  table.appendChild(row);
};
const clearButton = () => {
  table.textContent = "";
};
const colorize = (event) => {
  const target = event.target;
  if (target.tagName !== "TD") {
    return;
  }
  if (target.className === chosenColor) {
    target.className = "";
  } else {
    target.className = chosenColor;
  }
};
const pickColor = (event) => {
  chosenColor = event.target.value;
};
const addMouseOver = () => {
  table.addEventListener("mouseover", colorize);
};
const removeMouseOver = () => {
  table.removeEventListener("mouseover", colorize);
};

addRowBtn.addEventListener("click", makeRow);
newDraw.addEventListener("click", clearButton);
table.addEventListener("click", colorize);
select.addEventListener("change", pickColor);
table.addEventListener("mousedown", addMouseOver);
table.addEventListener("mouseup", removeMouseOver);
