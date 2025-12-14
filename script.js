const data = {
    Romans: {
        folder: "romans",
        kings: {
            "Julius Caesar": {
                img: "jul",
                desc: "Julius Caesar (100–44 BC) was a Roman general and statesman who played a crucial role in the collapse of the Roman Republic"
            }
        }
    },

    Indians: {
        folder: "indians",
        kings: {
            "Ashoka": {
                img: "ash",
                desc: "Ashoka was a Mauryan emperor known for embracing Buddhism and promoting peace."
            }
        }
    },

    Chinese: {
        folder: "chinese",
        kings: {
            "Qin Shi Huang": {
                img: "qin",
                desc: "Qin Shi Huang was the first emperor of a unified China."
            }
        }
    },

    Greeks: {
        folder: "greeks",
        kings: {
            "Alexander the Great": {
                img: "alex",
                desc: "Alexander the Great created one of the largest empires of the ancient world."
            }
        }
    },

    Egyptians: {
        folder: "egyptians",
        kings: {
            "Narmer": {
                img: "narmer",
                desc: "Narmer was the first pharaoh to unify Upper and Lower Egypt."
            },
            "Khufu": {
                img: "khufu",
                desc: "Khufu commissioned the Great Pyramid of Giza."
            },
            "Ramses II": {
                img: "ramses",
                desc: "Ramses II was one of the most powerful pharaohs of Egypt."
            }
        }
    },

    Persians: {
        folder: "persians",
        kings: {
            "Cyrus the Great": {
                img: "cyrus",
                desc: "Founder of the Achaemenid Empire and known for religious tolerance."
            },
            "Darius I": {
                img: "darius",
                desc: "Darius I expanded the Persian Empire and reformed administration."
            },
            "Xerxes I": {
                img: "xerxes",
                desc: "Xerxes led the Persian invasion of Greece."
            }
        }
    },

    Mongols: {
        folder: "mongols",
        kings: {
            "Genghis Khan": {
                img: "genghis",
                desc: "Founder of the Mongol Empire, the largest land empire in history."
            },
            "Ogedei Khan": {
                img: "ogedei",
                desc: "Expanded the Mongol Empire after Genghis Khan."
            },
            "Kublai Khan": {
                img: "kublai",
                desc: "Founder of the Yuan dynasty in China."
            }
        }
    },

    Turkish: {
        folder: "turkish",
        kings: {
            "Osman I": {
                img: "osman",
                desc: "Founder of the Ottoman Empire."
            },
            "Mehmed II": {
                img: "mehmed",
                desc: "Conquered Constantinople in 1453."
            },
            "Suleiman the Magnificent": {
                img: "suleiman",
                desc: "The greatest Ottoman sultan, known for law and expansion."
            }
        }
    },

    British: {
        folder: "british",
        kings: {
            "William the Conqueror": {
                img: "william",
                desc: "Norman king who conquered England in 1066."
            },
            "Henry VIII": {
                img: "henry",
                desc: "King of England known for religious reforms and six marriages."
            },
            "Elizabeth I": {
                img: "elizabeth",
                desc: "Queen during England's Golden Age."
            }
        }
    },

    Japanese: {
        folder: "japanese",
        kings: {
            "Emperor Jimmu": {
                img: "jimmu",
                desc: "Legendary first emperor of Japan."
            },
            "Tokugawa Ieyasu": {
                img: "tokugawa",
                desc: "Founder of the Tokugawa shogunate."
            },
            "Emperor Meiji": {
                img: "meiji",
                desc: "Modernized Japan during the Meiji Restoration."
            }
        }
    },

    Mesopotamians: {
        folder: "mesopotamians",
        kings: {
            "Sargon of Akkad": {
                img: "sargon",
                desc: "Founder of the Akkadian Empire."
            },
            "Hammurabi": {
                img: "hammurabi",
                desc: "Babylonian king famous for the Code of Hammurabi."
            },
            "Ashurbanipal": {
                img: "ashurbanipal",
                desc: "Last great king of the Assyrian Empire."
            }
        }
    },

    SoutheastAsian: {
        folder: "southeastasia",
        kings: {
            "Suryavarman II": {
                img: "suryavarman",
                desc: "Builder of Angkor Wat in the Khmer Empire."
            },
            "Jayavarman VII": {
                img: "jayavarman",
                desc: "Greatest king of the Khmer Empire."
            }
        }
    }

};

const civList = document.getElementById("civilizationList");
const kingList = document.getElementById("kingList");
const kingDetails = document.getElementById("kingDetails");
const search = document.getElementById("search");

for (let civ in data) {
    const li = document.createElement("li");
    li.textContent = civ;
    li.addEventListener("click", () => loadKings(civ));
    civList.appendChild(li);
}

function loadKings(civ) {
    kingList.innerHTML = "";
    kingDetails.innerHTML = "";

    const kings = data[civ].kings;

    for (let king in kings) {
        const tag = document.createElement("div");
        tag.className = "king-tag";
        tag.textContent = king;
        tag.addEventListener("click", () => showKing(civ, king));
        kingList.appendChild(tag);
    }
}

function showKing(civ, king) {
    const k = data[civ].kings[king];

    kingDetails.innerHTML = `
        <h2>${king}</h2>
        <p>${k.desc}</p>
        <img src="images/${data[civ].folder}/${k.img}.jpg" alt="${king}">
    `;
}

search.addEventListener("input", () => {
    const term = search.value.toLowerCase();
    kingList.innerHTML = "";
    kingDetails.innerHTML = "";

    if (term === "") return;

    for (let civ in data) {
        for (let king in data[civ].kings) {
            if (king.toLowerCase().includes(term)) {
                const tag = document.createElement("div");
                tag.className = "king-tag";
                tag.textContent = `${king} (${civ})`;
                tag.addEventListener("click", () => showKing(civ, king));
                kingList.appendChild(tag);
            }
        }
    }
});