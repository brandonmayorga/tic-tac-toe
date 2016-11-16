// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function left() {
var myCircle = document.createElementNS(namespace, "circle")
myCircle.setAttribute("cx",50)
myCircle.setAttribute("cy",50)
myCircle.setAttribute("r",50)
myCircle.setAttribute("fill", "white")
var canvas = document.getElementById("game-board")
canvas.appendChild(myCircle)
}
