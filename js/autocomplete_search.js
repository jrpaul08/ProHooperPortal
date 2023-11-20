let players = [
  "Anthony Davis",
  "Aaron Gordon",
  "Al Horford",
  "Bradley Beal",
  "Ben Simmons",
  "Bam Adebayo",
  "Chris Paul",
  "Collin Sexton",
  "C.J McCollum",
  "Damian Lillard",
  "Demar Derozan",
  "Devin Booker",
  "Giannis Antetokounmpo",
  "Gordon Hayward",
  "Grant Williams",
  "Ja Morant",
  "Jayson Tatum",
  "Joel Embiid",
  "Kevin Durant",
  "Kawhi Leanord",
  "Kyle Lowry"
];

let teams = [
  "Atlanta Hawks",
  "Boston Celtics",
  "Brooklyn Nets",
  "Charlotte Hornets",
  "Chicago Bulls",
  "Cleveland Cavaliers",
  "Denver Nuggets",
  "Los Angeles Lakers",
  "Los Angeles Clippers",
  "Memphis Grizzlies",
  "Miami Heat",
  "Milwaukee Bucks"
];
// Sort both lists
let sortedPlayers = players.sort();
let sortedTeams = teams.sort();

// Get the input element based on the current HTML page
let input = document.getElementById("input");

// Execute function on keyup
input.addEventListener("keyup", (e) => {
    removeElements();
    let currentList = (document.title === "Players" || document.title === "Player_profile") ? sortedPlayers : sortedTeams;
    for (let item of currentList) {
        if (
            item.toLowerCase().startsWith(input.value.toLowerCase()) &&
            input.value !== ""
        ) {
            let listItem = document.createElement("li");
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames('" + item + "')");
            let word = "<b>" + item.substr(0, input.value.length) + "</b>";
            word += item.substr(input.value.length);
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);
        }
    }
});

function displayNames(value) {
    input.value = value;
    removeElements();
}

function removeElements() {
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
        item.remove();
    });
}
