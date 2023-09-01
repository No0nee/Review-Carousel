const reviews = [
  {
    id: 1,
    name: "Goju Satoru",
    role: "Jujutsu Sorcerer",
    img: "./person-1.png",
    info: "One of the main protagonists of the Jujutsu Kaisen series. Widely recognized as the strongest in the world."
  },
  {
    id: 2,
    name: "Sung Jin-Woo",
    role: "Hunter / Shadow Monarch",
    img: "./person-2.png",
    info: "The main protagonist of Solo Leveling. Widely known as humanity's greatest hunter and the second Shadow Monarch."
  },
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