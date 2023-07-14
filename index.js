/*
Your code here


dodger.style.backgroundColor = "#FF69B4";

dodger.style.left = "0px";

dodger.style.right = "0px";

document.addEventListener("keydown", function (event) {
  console.log(event);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
  }
});

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const dodger = document.getElementById("dodger");

moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
    
};

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(leftNumbers, 10);
  
    if (right > 0) {
      dodger.style.left = `${left + 1}px`;
    }
};
*/


const dodger = document.getElementById("dodger");

function moveDodgerLeft(){
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0){
    dodger.style.left = `${left-1}px`;
  }
}

document.addEventListener("keydown", function(e){
  if (e.key === "ArrowLeft"){
    moveDodgerLeft();
  }
});

function moveDodgerRight(){
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0){
    dodger.style.left = `${left+1}px`;
  }
}

document.addEventListener("keydown", function(e){
  if (e.key === "ArrowRight"){
    moveDodgerRight();
  }
});
