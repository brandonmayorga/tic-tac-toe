// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function left() {
var myRect = document.createElementNS(namespace, "rect")
myRect.setAttribute("x=0" "y=0" "width=100" "height=100" "fill", "white")
var canvas = document.getElementById("game-board")
canvas.appendChild(myRect)
}
