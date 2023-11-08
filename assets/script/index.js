"use strict";

/* - - - - - - - - - - - - - - - - - - - - - - - - */
// Utility functions
function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
  return parent.querySelector(selector);
}

/* - - - - - - - - - - - - - - - - - - - - - - - - */
// Selections

const imgHeads = select(".img-heads");
const imgTails = select(".img-tails");
const imgQuestion = select(".img-question");

const imageContainer = select(".image-container");
const btnContainer = select(".btn-container");

const btnHeads = select(".heads");
const btnTails = select(".tails");
const btnFlip = select(".flip");

const h2 = select("h2");

/* - - - - - - - - - - - - - - - - - - - - - - - - */
// Main Code

// Reset the coin images
let userChoice = null;

function resetGame() {
  imgHeads.style.display = "block";
  imgTails.style.display = "none";
  userChoice = null;
  imgHeads.classList.remove("rotatey");
}

resetGame();

// Compare the choice

function compareCoin() {
  let number = Math.trunc(Math.random() * 2);
  let condition = `${userChoice}-${number}`;

  setTimeout(() => {
    switch (condition) {
      case "Heads-0":
        h2.innerText = "Heads it is. You win!";
        imgHeads.style.display = "block";
        imgTails.style.display = "none";

        break;
      case "Tails-1":
        h2.innerText = "Tails it is. You win!";
        imgTails.style.display = "block";
        imgHeads.style.display = "none";
        break;
      case "Heads-1":
        h2.innerText = "Oops! It's not heads. Try again!";
        imgTails.style.display = "block";
        imgHeads.style.display = "none";
        break;
      case "Tails-0":
        h2.innerText = "Oops! It's not tails. Try again!";
        imgHeads.style.display = "block";
        imgTails.style.display = "none";
        break;
    }
  }, 3000);
}

/* - - - - - - - - - - - - - - - - - - - - - - - - */
// Events

onEvent("click", btnFlip, () => {
  compareCoin();
  imgHeads.classList.add("animate");

  setTimeout(() => {
    imgHeads.classList.remove("animate");
  }, 3000);
});

onEvent("click", btnHeads, () => {
  userChoice = "Heads";
});

onEvent("click", btnTails, () => {
  userChoice = "Tails";
});
