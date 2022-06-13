let addToDobutton = document.getElementById("addToDo");
let toDocontainer = document.getElementById("toDocontainer");
let inputField = document.getElementById("inputField");

addToDobutton.addEventListener("click", function () {
  var paragraph = document.getElementById("p");
  paragraph.innerText = inputField.nodeValue;
  toDocontainer.appendChild(paragraph - styling);
  paragraph.addEventListener("click", function () {
    paragraph.styling.textDecoration = "line-through";
  });
  paragraph.addEventListener("dbclick", function () {
    toDocontainer.removeChild(paragraph);
  });
});
