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

//parseInt gibt die erste gefundene (ganze) Zahl zurück
let top = parseInt(ball.style.top);
let left= parseInt(ball.style.left);
let ausgabeText= "";
 
//  ob tatsächliche Daten des Ereignisses verfügbar sind...
if(event.beta!= null) { 

// beta= Grad im Wertebereich [-180, +180] vorwärts-, rückwärts +
ausgabeText+= "beta: " + event.beta.toFixed(1) + "<br>";
// gamma = Grad im Wertebereich [-180, +180] vorwärts-, rückwärts +
ausgabeText+= "gamma: " + event.gamma.toFixed(1) + "<br>";
}
ausgabeText += "top: " + ball.style.top+ "<br>";
ausgabeText += "left: " + ball.style.left+ "<br>";
ausgabe.innerHTML= ausgabeText;
top = Math.max(0, Math.min(fieldHeight, top + event.beta / 10)); // Beta für vertikale Verschiebung nehmen
left = Math.max(0, Math.min(fieldWidth, left + event.gamma / 10)); // Gamma für horizontale Verschiebung nehmen

 //Um das Verlassen des Feldes zu vermeiden
 if (top>180){
    top =180;
}
if (left>180){
    left =180;
}
 
//  neuer Ort des Balles
ball.style.top= top + "px";
ball.style.left= left+ "px";
 //Um zu gewinnen
  if (top <=151 && top >= 149 && left <=151 && left >= 149){
  alert ("You win !!! Play again");}
}
}
