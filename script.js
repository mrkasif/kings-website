/* ===============================
   GLOBAL ELEMENT REFERENCES
================================ */
const cardsContainer = document.getElementById("cards");
const popup = document.getElementById("popup");
const popTitle = document.getElementById("popTitle");
const popText = document.getElementById("popText");
const closeBtn = document.getElementById("closeBtn");

const navButtons = document.querySelectorAll(".nav-btn");
const sidebar = document.querySelector(".sidebar");
const sectionTitle = document.querySelector(".section-title");

/* ===============================
   MASTER DATA STRUCTURE
   (You can expand freely)
================================ */
const DATA = {
  History: {
    title: "HISTORY",
    categories: {
      Romans: [
        {
          name: "Julius Caesar",
          text: "Roman general and statesman who played a key role in the fall of the Roman Republic."
        },
        {
          name: "Augustus",
          text: "First Roman Emperor and founder of the Roman Empire."
        }
      ],
      Greeks: [
        {
          name: "Alexander the Great",
          text: "Created one of the largest empires of the ancient world."
        }
      ],
      Indian: [
        {
          name: "Ashoka",
          text: "Mauryan emperor known for spreading Buddhism and peace."
        }
      ],
      Egyptian: [
        {
          name: "Ramses II",
          text: "One of the most powerful pharaohs of Egypt."
        }
      ],
      Mongols: [
        {
          name: "Genghis Khan",
          text: "Founder of the Mongol Empire."
        }
      ]
    }
  },

  Science: {
    title: "SCIENCE",
    categories: {
      Physics: [
        {
          name: "Isaac Newton",
          text: "Formulated the laws of motion and universal gravitation."
        }
      ],
      Biology: [
        {
          name: "Charles Darwin",
          text: "Proposed the theory of evolution by natural selection."
        }
      ],
      Astronomy: [
        {
          name: "Galileo Galilei",
          text: "Father of observational astronomy."
        }
      ]
    }
  },

  Places: {
    title: "PLACES",
    categories: {
      Wonders: [
        {
          name: "Great Pyramid of Giza",
          text: "Oldest of the Seven Wonders of the Ancient World."
        }
      ],
      Cities: [
        {
          name: "Rome",
          text: "Capital of the Roman Empire."
        }
      ]
    }
  }
};

/* ===============================
   INITIAL LOAD
================================ */
let currentSection = "History";
loadSection(currentSection);

/* ===============================
   NAVIGATION HANDLING
================================ */
navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const sectionName = btn.textContent.trim();
    if (DATA[sectionName]) {
      loadSection(sectionName);
    }
  });
});

/* ===============================
   LOAD SECTION
================================ */
function loadSection(sectionName) {
  currentSection = sectionName;
  const section = DATA[sectionName];

  // Update title
  sectionTitle.textContent = section.title;

  // Build sidebar
  sidebar.innerHTML = "";
  const categories = Object.keys(section.categories);

  categories.forEach((cat, index) => {
    const div = document.createElement("div");
    div.className = "side-item";
    div.textContent = cat;
    div.onclick = () => loadCards(sectionName, cat);
    sidebar.appendChild(div);

    // Auto-load first category
    if (index === 0) loadCards(sectionName, cat);
  });
}

/* ===============================
   LOAD CARDS
================================ */
function loadCards(sectionName, categoryName) {
  cardsContainer.innerHTML = "";

  const items = DATA[sectionName].categories[categoryName];

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h4>${item.name}</h4>
      <p>${item.text.substring(0, 60)}...</p>
    `;

    card.onclick = () => openPopup(item.name, item.text);
    cardsContainer.appendChild(card);
  });
}

/* ===============================
   POPUP LOGIC
================================ */
function openPopup(title, text) {
  popTitle.textContent = title;
  popText.textContent = text;
  popup.classList.add("active");
}

closeBtn.addEventListener("click", closePopup);
popup.addEventListener("click", e => {
  if (e.target === popup) closePopup();
});

function closePopup() {
  popup.classList.remove("active");
}
