// Function to retrieve player data based on player name
function getPlayerData(playerName) {
    const apiUrl = 'http://localhost:8080/player_info'; // Replace with your API URL

    return $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
    })
    .then(data => {
        return data[playerName];
    })
    .fail(error => {
        console.error('Error fetching player data:', error.status);
        return null;
    });
}

// Function to populate player information
function populatePlayerInfo(playerData, targetElements) {
    console.log('Player Data:', playerData); // Log player data to the console
    if (playerData) {
        for (const key in targetElements) {
            if (Object.prototype.hasOwnProperty.call(targetElements, key)) {
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
async function handlePlayerSearch() {
    const playerName = $('#input').val();
    const playerData = await getPlayerData(playerName);

    if (playerData) {
        // Redirect to the "Player Profile" page
        window.location.href = 'player_profile.html';

        // Store player data in localStorage
        localStorage.setItem('playerData', JSON.stringify(playerData));
    } else {
        alert('Player not found');
    }
}

// Check if we are on the "Player Profile" page and display player data
if (window.location.href.endsWith('player_profile.html')) {
    // Retrieve player data from localStorage
    const playerDataString = localStorage.getItem('playerData');
    if (playerDataString) {
        const playerData = JSON.parse(playerDataString);

        const targetElements = {
            'player-image': 'player-image',
            name: 'player-name',
            age: 'player-age',
            height: 'player-height',
            weight: 'player-weight',
            ppg: 'player-ppg',
            rpg: 'player-rpg',
            apg: 'player-apg',
        };

        // Populate player information
        populatePlayerInfo(playerData, targetElements);
    } else {
        alert('Player data not found');
    }
}

// Event listener for player search form on both pages
$('.search-bar form').submit(function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    handlePlayerSearch();
});

// Function to handle popular player image click
function handlePopularPlayerClick(playerName) {
    getPlayerData(playerName)
        .done(function(playerData) {
            if (playerData) {
                // Clear previous player data from localStorage
                localStorage.removeItem('playerData');

                // Store new player data in localStorage
                localStorage.setItem('playerData', JSON.stringify(playerData));

                // Redirect to the "Player Profile" page
                window.location.href = 'player_profile.html';
            } else {
                alert('Player not found');
            }
        })
        .fail(function(error) {
            console.error('Error handling popular player click:', error);
            alert('An error occurred while fetching player data');
        });
}

// Add event listeners to popular player images
document.querySelectorAll(".popular-player").forEach(function (image) {
    image.addEventListener("click", function (event) {
        event.preventDefault();
        
        // Assuming the player name is in the sibling element (adjust if needed)
        const playerName = event.currentTarget.nextElementSibling.textContent;
        
        handlePopularPlayerClick(playerName);
    });
});




