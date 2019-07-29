var box = document.getElementById('box');
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

var targetX = Math.random() * boxWidth;
var targetY = Math.random() * boxHeight;

console.log(`targetx: ${targetX}\ntargety: ${targetY}`);

function loc(event){
  console.log(`mouseX: ${event.clientX}`, `mouseY: ${event.clientY}`);
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  var dist = distance(targetX, targetY, mouseX, mouseY);
  box.style.backgroundColor = `rgb(${255-dist}, 0, 0)`;
  console.log(dist)
  if (dist < 20){
    box.style.backgroundColor("blue")
    alert("you win!");
  }
}

box.addEventListener("mousemove", loc);

function distance(targetX, targetY, mouseX, mouseY){
  var x = targetX - mouseX;
  var y = targetY - mouseY;
  var z = Math.sqrt( targetX*mouseX + targetY*mouseY );
  console.log(z);
  return z;
}

//var spot = targetX, targetY
//if the person clicks the spot which is target x target y
