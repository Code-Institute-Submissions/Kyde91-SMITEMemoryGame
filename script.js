// Save a reference to grid container and class name
const gridContainer = document.querySelector(".grid-container");

// Global variables for ease of use
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

// This displays the score
document.querySelector(".score").textContent = score;

// fetch api to get data for card images. used spread operator for less code
fetch("/data/cards.json")
  .then((res) => res.json())
  .then((data) => {
    cards = [...data, ...data];
    shuffleCards();
    generateCards();
  });
