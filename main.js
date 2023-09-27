const cards = document.querySelectorAll(".card");
const columns = document.querySelectorAll(".column");
const addTaskButtons = document.querySelectorAll(".add-task-button");

let draggedCard;

cards.forEach((card) => {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
});

columns.forEach((column) => {
  column.addEventListener("dragover", dragOver);
  column.addEventListener("dragenter", dragEnter);
  column.addEventListener("dragleave", dragLeave);
  column.addEventListener("drop", drop);
});
addTaskButtons.forEach((button) => {
  button.addEventListener("click", addRandomTask);
});

function dragStart() {
  draggedCard = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
}

function dragEnd() {
  this.style.display = "block";
  draggedCard;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.style.backgroundColor = "#36454f";
}

function dragLeave() {
  this.style.backgroundColor = "#36454f";
}

function drop() {
  this.appendChild(draggedCard);
  this.style.backgroundColor = "#36454f";
}
function addRandomTask() {
  const column = this.parentNode;
  const card = document.createElement("div");
  card.className = "card";
  card.draggable = true;
  card.textContent = generateRandomTask();
  column.insertBefore(card, this);
}

function generateRandomTask() {
  const tasks = ["vazifa #1", "vazifa #2", "vazifa #3", "vazifa #4"];
  const randomIndex = Math.floor(Math.random() * tasks.length);
  return tasks[randomIndex];
}
