// drag and drop algorithm

function handleDragStart(e) {
  this.style.opacity = "0.4";

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", this.innerHTML);
}
function handleDragLeave(e) {
  e.stopPropagation();
  this.classList.remove("over");
}
function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  return false;
}
function handleDragDrop(e) {
  e.stopPropagation();

  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData("text/html");
  }

  return false;
}
function handleDragEnter(e) {
  this.classList.add("over");
}
function handleDragEnd(e) {
  let item = document.querySelectorAll(".draggrable");
  [].forEach.call(item, function (item) {
    item.classList.remove("over");
  });
  this.style.opacity = "1";
}
let items = document.querySelectorAll("li");
items.forEach(function (item) {
  item.addEventListener("dragstart", handleDragStart);
  item.addEventListener("dragover", handleDragOver);
  item.addEventListener("dragenter", handleDragEnter);
  item.addEventListener("dragleave", handleDragLeave);
  item.addEventListener("dragend", handleDragEnd);
  item.addEventListener("drop", handleDragDrop);
});

function createUI() {
  let item = document.querySelector("input").value;
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.classList.add("item");
  let drag = document.createAttribute("draggable");

  drag.value = true;
  li.setAttributeNode(drag);
  li.innerText = item;
  ul.appendChild(li);
  dragAndDrop(li);
}
let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  createUI();
});
