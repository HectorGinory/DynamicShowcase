// Drag and Drop Functions
function allowDrop(ev) {
    ev.preventDefault();
  }
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
//Total price shown in screen
let totalPrc = 32.96;
let totalPrcHtml = document.getElementById('totalprc');
let totalPrcContain = document.createTextNode(totalPrc)
totalPrcHtml.appendChild(totalPrcContain);