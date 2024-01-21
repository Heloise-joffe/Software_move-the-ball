"use strict";


alert("Move the ball in the cube");
let ball = document.getElementById("meinBall");
let ausgabe= document.getElementById("ausgabe");
let goal= document.getElementById("meinTor");
let vorigeZeit= 0; // Zeitzähler
const fieldWidth = 300; // Largeur du terrain
const fieldHeight = 300; // Hauteur du terrain
if (window.DeviceOrientationEvent)
 {
    ball.style.top= 90 + "px"; // Startposition
    ball.style.left= 90 + "px"; // Startposition
    goal.style.top= 150 + "px"; // Startposition
    goal.style.left= 150 + "px"; // Startposition
    window.addEventListener('deviceorientation', handleEvent);
    let meinButton= document.getElementById("myBtn");
    meinButton.addEventListener("click", handleEvent);
}
else{
alert("Keine Device Orientation verfügbar");
}

function handleEvent(event) {
let zeit = Date.now(); // Zeit in Millisekunden seit 1.1.1970
// 50 msvergangen
if(zeit > vorigeZeit+ 50) {
vorigeZeit= zeit;

//parseInt renvoie le premier nombre (entier) trouvé, pxsupprime
let top = parseInt(ball.style.top);
let left= parseInt(ball.style.left);
let ausgabeText= "";

if(event.beta!= null) { 
// si des données réelles de l'événement sont disponibles...
// beta= degrés dans la plage de valeurs [-180, +180] vers l'avant -vers l'arrière +
ausgabeText+= "beta: " + event.beta.toFixed(1) + "<br>";
// gamma= degrés dans la plage de valeurs [-90, +90] vers la droite + vers la gauche -
ausgabeText+= "gamma: " + event.gamma.toFixed(1) + "<br>";
}
ausgabeText += "top: " + ball.style.top+ "<br>";
ausgabeText += "left: " + ball.style.left+ "<br>";
ausgabe.innerHTML= ausgabeText;
top = Math.max(0, Math.min(fieldHeight, top + event.beta / 10)); // Utilisez event.gamma pour le déplacement vertical
left = Math.max(0, Math.min(fieldWidth, left + event.gamma / 10)); // Utilisez event.beta pour le déplacement horizontal
 if (top>180){
    top =180;
}
if (left>180){
    left =180;
}
// nouvelle endroit de la balle
ball.style.top= top + "px";
ball.style.left= left+ "px";
  if (top <=151 && top >= 149 && left <=151 && left >= 149){
  alert ("You win !!! Play again");}
}
}
