 // Your code here
var dodger = document.getElementById('dodger');
      
dodger.style.backgroundColor = "#ff69b4";
      
function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);
        
  if ( left > 0 ) {
    dodger.style.left = `${left - 4}px`;
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);

  if ( left < 360) {
    dodger.style.left = `${left + 4}px`;
  }
}
      
document.addEventListener('keydown', function(e) {
  if ( e.which === 37 ) {
    moveDodgerLeft();
  }
  if ( e.which === 39 ) {
    moveDodgerRight();
  }
}); 

/*
const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";
//dodger.style.left = "0px";

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
function moveDodgerRight() {
  const rightNumbers = dodger.style.right.replace("px", "");
  const right = parseInt(rightNumbers, 10);

  if(right > 0) {
    dodger.style.right = `${right + 1}px`;

  }
}
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft"){
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight"){
  }
});*/