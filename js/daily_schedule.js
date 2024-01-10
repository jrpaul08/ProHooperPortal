const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
        const response = JSON.parse(this.responseText);
        const games = response.body;
        const table = document.querySelector('.schedule-table');

        // Clear existing rows except the header
        table.innerHTML = table.rows[0].outerHTML;

        // Add new rows for each game
        games.forEach(game => {
            const row = table.insertRow(-1); // Inserts a row at the end of the table
            const homeCell = row.insertCell(0);
            const awayCell = row.insertCell(1);
            const dateCell = row.insertCell(2);
            const scoreCell = row.insertCell(3);

            homeCell.textContent = game.home;
            awayCell.textContent = game.away;
            dateCell.textContent = formatDate(game.gameDate);
            scoreCell.textContent = 'TBD'; // Replace with actual score if available
        });
    }
});

xhr.open('GET', 'https://tank01-fantasy-stats.p.rapidapi.com/getNBAGamesForDate?gameDate=20221202');
xhr.setRequestHeader('X-RapidAPI-Key', 'a2a70570f4mshf5831be3a4d0056p1f5ac4jsn223dc8bef2d1');
xhr.setRequestHeader('X-RapidAPI-Host', 'tank01-fantasy-stats.p.rapidapi.com');
xhr.send(null);

function formatDate(dateString) {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

function formatDate(dateString) {
    // Extract year, month, and day from dateString
    var year = dateString.substring(0, 4);
    var month = dateString.substring(4, 6);
    var day = dateString.substring(6, 8);

    // Adjust month to zero-based index (0-11)
    month = month - 1;

    // Create a new Date object
    var date = new Date(year, month, day);

    // Format the date to 'MM/DD/YYYY'
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
}