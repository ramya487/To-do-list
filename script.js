var content;
var text;
var newElement;
var myarray;
var index;

display();

function display() {
  document.getElementById("grid").innerHTML = "";
  if (localStorage["tasks"] != undefined) {
    for (let x of JSON.parse(localStorage["tasks"])) {
      content = x+``;
      newElement = document.createElement("div");
      newElement.innerHTML = content;
      var container = document.getElementById("grid");
      newElement.addEventListener("click", remove);
      container.appendChild(newElement);
    }
  }
}

function add() {
  var content = document.getElementById("input").value;
  document.getElementById("input").value = "";
  if (content == "") {
    return;
  }
  if (localStorage.length == 0) {
    localStorage.setItem("tasks", JSON.stringify([content]));
    display();
  } else {
    myarray = localStorage["tasks"];
    myarray = JSON.parse(myarray);
    myarray.push(content);
    localStorage.setItem("tasks", JSON.stringify(myarray));
    display();
  }
}

function remove(event) {
  text = event.target.innerHTML;
  myarray = JSON.parse(localStorage["tasks"]);
  index = myarray.indexOf(text);
  myarray.splice(index, 1);
  localStorage["tasks"] = JSON.stringify(myarray);
  event.target.parentNode.removeChild(event.target);
}