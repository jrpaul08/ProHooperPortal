
// Function to retrieve player data based on player name
function getPlayerData(playerName) {
    // Simulated JSON data, replace with your actual data retrieval logic
    const players = {
        "Anthony Davis": {
            name: "Anthony Davis",
            age: "30 yrs",
            height: "6'10''",
            weight: "253lb",
            ppg: 23.9,
            rpg: 12.0,
            apg: 3.3,
            img: "images/Anthony_Davis.png"
        },
        "Aaron Gordon": {
            name: "Aaron Gordon",
            age: "28 yrs",
            height: "6'8''",
            weight: "235lb",
            ppg: 13.4,
            rpg: 7.1,
            apg: 3.8,
            img: "images/Aaron_Gordon.png"
        },
        "Al Horford": {
            name: "Al Horford",
            age: "37 yrs",
            height: "6'9''",
            weight: "240lb",
            ppg: 5.0,
            rpg: 6.1,
            apg: 2.1,
            img:"images/Al_Horford.png"
        },
        "Bradley Beal": {
            name: "Bradley Beal",
            age: "30 yrs",
            height: "6'4''",
            weight: "207lb",
            ppg: 13.0,
            rpg: 4.0,
            apg: 4.0,
            img:"images/Bradley_Beal.png"
        },
        "Ben Simmons": {
            name: "Ben Simmons",
            age: "27 yrs",
            height: "6'10''",
            weight: "240lb",
            ppg: 6.5,
            rpg: 10.8,
            apg: 6.7,
            img:"images\Ben_Simmons.png"
        },
        "Bam Adebayo": {
            name: "Bam Adebayo",
            age: "26 yrs",
            height: "6'9''",
            weight: "255lb",
            ppg: 22.7,
            rpg: 9.4,
            apg: 3.4,
            img:"images\Bam_Adebayo.png"
        },
        "Chris Paul": {
            name: "Chris Paul",
            age: "38 yrs",
            height: "6'0''",
            weight: "175lb",
            ppg: 8.8,
            rpg: 4.0,
            apg: 7.3,
            img:"images\Chris_Paul.png"
        },
        "Collin Sexton": {
            name: "Collin Sexton",
            age: "24 yrs",
            height: "6'3''",
            weight: "190lb",
            ppg: 12.4,
            rpg: 2.1,
            apg: 2.3,
            img:"images\Collin_Sexton.png"
        },
        "C.J McCollum": {
            name: "C.J McCollum",
            age: "32 yrs",
            height: "6'3''",
            weight: "190lb",
            ppg: 21.7,
            rpg: 4.8,
            apg: 5.7,
            img:"images/CJ_Mccollum.png"
        },
        "Damian Lillard": {
            name: "Damian Lillard",
            age: "33 yrs",
            height: "6'2''",
            weight: "195lb",
            ppg: 22.7,
            rpg: 4.8,
            apg: 5.0,
            img:"images/Damian_Lillard.png"
        },
        "Demar Derozan": {
            name: "Demar Derozan",
            age: "34 yrs",
            height: "6'6''",
            weight: "220lb",
            ppg: 21.4,
            rpg: 3.1,
            apg: 4.6,
            img:"images/Demar_Derozan.png"
        },
        "Devin Booker": {
            name: "Devin Booker",
            age: "27 yrs",
            height: "6'6''",
            weight: "206lb",
            ppg: 31.5,
            rpg: 7.5,
            apg: 10.5,
            img:"images/Devin_Booker.png"
        },
        "Giannis Antetokounmpo": {
            name: "Giannis Antetokounmpo",
            age: "28 yrs",
            height: "6'11''",
            weight: "243lb",
            ppg: 24.4,
            rpg: 9.0,
            apg: 3.4,
            img:"images/Giannis_Antetokounmpo.png"
        },
        "Gordon Hayward": {
            name: "Gordon Hayward",
            age: "28 yrs",
            height: "6'11''",
            weight: "243lb",
            ppg: 24.4,
            rpg: 9.0,
            apg: 3.4,
            img:"images/Gordon_Hayward.png"
        }        
        // Add more players as needed
    };

    return players[playerName];
}

// Function to populate player information
function populatePlayerInfo(playerData, targetElements) {
    if (playerData) {
        for (const key in targetElements) {
            if (Object.prototype.hasOwnProperty.call(targetElements, key)) {
                // document.getElementById(targetElements[key]).textContent = playerData[key];
                const element = document.getElementById(targetElements[key]);
                if (key === "player-image") {
                    console.log("Image source:", playerData.img);
                    element.src = playerData.img;
                } else {
                    element.textContent = playerData[key];
                }
            }
        }
    } else {
        alert("Player not found");
    }
}

// Function to handle player search form submission
function handlePlayerSearch() {
    const playerName = document.getElementById("input").value;
    const playerData = getPlayerData(playerName);

    if (playerData) {
        // Redirect to the "Player Profile" page
        window.location.href = "player_profile.html";

        // Store player data in localStorage
        localStorage.setItem('playerData', JSON.stringify(playerData));
    } else {
        alert("Player not found");
    }
}

// Check if we are on the "Player Profile" page and display player data
if (window.location.href.endsWith("player_profile.html")) {
    // Retrieve player data from localStorage
    const playerDataString = localStorage.getItem('playerData');
    if (playerDataString) {
        const playerData = JSON.parse(playerDataString);

        const targetElements = {
            "player-image": "player-image",
            name: "player-name",
            age: "player-age",
            height: "player-height",
            weight: "player-weight",
            ppg: "player-ppg",
            rpg: "player-rpg",
            apg: "player-apg"
        };

        populatePlayerInfo(playerData, targetElements);
    } else {
        alert("Player data not found");
    }
}

// Event listener for player search form on both pages
document.querySelector(".search-bar form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    handlePlayerSearch();
});
// Function to handle popular player image click
function handlePopularPlayerClick(playerName) {
    const playerData = getPlayerData(playerName);

    if (playerData) {
        // Store player data in localStorage
        localStorage.setItem('playerData', JSON.stringify(playerData));

        // Redirect to the "Player Profile" page
        window.location.href = "player_profile.html";
    } else {
        alert("Player not found");
    }
}

// Add event listeners to popular player images
const popularPlayerImages = document.querySelectorAll(".popular-player");
popularPlayerImages.forEach(function (image) {
    image.addEventListener("click", function () {
        const playerName = image.nextElementSibling.textContent; // Assuming the player name is in the next sibling element (adjust if needed)
        handlePopularPlayerClick(playerName);
    });
});
