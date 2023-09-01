const reviews = [
  {
    id: 1,
    name: "Goju Satoru",
    role: "Jujutsu Sorcerer",
    info: "One of the main protagonists of the Jujutsu Kaisen series. Widely recognized as the strongest in the world."
  }
]

// Selecting Items

const img = document.getElementById("person-img");
const name = document.getElementById("name");
const role = document.getElementById("role");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// Current Item

let currentItem = 0;