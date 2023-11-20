// Function to handle form submission and redirection on the landing page
function handleFormSubmission(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const playerName = document.getElementById("input").value;
    if (playerName) {
        // Redirect to the Player Profile page with the selected player's name as a query parameter
        window.location.href = "player_profile.html?name=" + encodeURIComponent(playerName);
    }
}

// Attach event listener to the landing page's search form
const searchForm = document.querySelector(".search-bar form");
if (searchForm) {
    searchForm.addEventListener("submit", handleFormSubmission);
}