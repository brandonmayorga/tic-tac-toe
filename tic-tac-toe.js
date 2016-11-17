// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function left() {
var myCircle = document.createElementNS(namespace, "circle")
myCircle.setAttribute("cx",50)
myCircle.setAttribute("cy",50)
myCircle.setAttribute("r",47)
myCircle.setAttribute("fill", "white")
var canvas = document.getElementById("game-board")
canvas.appendChild(myCircle)
}
function leftm() {
var myCircle1 = document.createElementNS(namespace, "circle")
myCircle1.setAttribute("cx",155)
myCircle1.setAttribute("cy",50)
myCircle1.setAttribute("r",47)
myCircle1.setAttribute("fill", "white")
var canvas = document.getElementById("game-board")
canvas.appendChild(myCircle1)
}
function leftr() {
var myCircle2 = document.createElementNS(namespace, "circle")
myCircle2.setAttribute("cx",255)
myCircle2.setAttribute("cy",50)
myCircle2.setAttribute("r",47)
myCircle2.setAttribute("fill", "white")
var canvas = document.getElementById("game-board")
canvas.appendChild(myCircle2)
}
function midl() {
var myCircle3 = document.createElementNS(namespace, "circle")
myCircle3.setAttribute("cx",50)
myCircle3.setAttribute("cy",155)
myCircle3.setAttribute("r",47)
myCircle3.setAttribute("fill", "white")
var canvas = document.getElementById("game-board")
canvas.appendChild(myCircle3)
}
function midm() {
var myCircle4 = document.createElementNS(namespace, "circle")
myCircle4.setAttribute("cx",155)
myCircle4.setAttribute("cy",155)
myCircle4.setAttribute("r",47)
myCircle4.setAttribute("fill", "white")
var canvas = document.getElementById("game-board")
canvas.appendChild(myCircle4)
}
function midr() {
var myCircle5 = document.createElementNS(namespace, "circle")
myCircle5.setAttribute("cx",255)
myCircle5.setAttribute("cy",155)
myCircle5.setAttribute("r",47)
myCircle5.setAttribute("fill", "white")
var canvas = document.getElementById("game-board")
canvas.appendChild(myCircle5)
}
function botl() {
var myCircle6 = document.createElementNS(namespace, "circle")
myCircle6.setAttribute("cx",50)
myCircle6.setAttribute("cy",255)
myCircle6.setAttribute("r",47)
myCircle6.setAttribute("fill", "white")
var canvas = document.getElementById("game-board")
canvas.appendChild(myCircle6)
}
function botm() {
var myCircle7 = document.createElementNS(namespace, "circle")
myCircle7.setAttribute("cx",155)
myCircle7.setAttribute("cy",255)
myCircle7.setAttribute("r",47)
myCircle7.setAttribute("fill", "white")
var canvas = document.getElementById("game-board")
canvas.appendChild(myCircle7)
}
function botr() {
var myCircle8 = document.createElementNS(namespace, "circle")
myCircle8.setAttribute("cx",255)
myCircle8.setAttribute("cy",255)
myCircle8.setAttribute("r",47)
myCircle8.setAttribute("fill", "white")
var canvas = document.getElementById("game-board")
canvas.appendChild(myCircle8)
}
