const reviews = [
  {
    id: 0,
    name: "Seishiro Nagi",
    role: "Soccer Player",
    img: "./person-0.png",
    info: "A contender for the Blue Lock Project and the titular protagonist of the spin-off,"
  },
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
  {
    id: 3,
    name: "Yu Ijin",
    role: "Mercenary",
    img: "./person-3.png",
    info: "The main protagonist of the Mercenary Enrollment. A gifted young mercenary and survivor of a plane crash"
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

// Function to load item

window.addEventListener("DOMContentLoaded", function() {
  showPerson(currentItem)
})

//Function to show person

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  name.textContent = item.name;
  role.textContent = item.role;
  info.textContent = item.info;
}