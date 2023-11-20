// Function to retrieve player data based on player name
function getPlayerData(playerName):
    //Simulated JSON data containing player info
    players = {
        "Damian Lillard": {
            name: "Damian Lillard",
            age: "33 yrs",
            height: "6'2''",
            weight: "195 lb",
            ppg: 22.7,
            rpg: 4.8,
            apg: 5.0
        },
        //  (other players)
    }
    return players[playerName]

// Function to populate player information
function populatePlayerInfo(playerData, targetElements):
    if playerData is not null:
        //update the UI with the player's information
        //Iterate through the target elements and set their content based on the player's data
                //Set the text content of the target element with the corresponding player data
    else:
       //If player data is not available, show an alert indicating that the player was not found
        
// Function to handle player search form submission
function handlePlayerSearch():
    playerName = getElementValue("input")
    playerData = getPlayerData(playerName)
    if playerData is not null:
        // Redirect the user to the "Player Profile" page
        // Store the player data in the local storage for future use
    else:
        // If player data is not found, show an alert indicating that the player was not found

if on PlayerProfile Page:
// Retrieve the player data from the local storage    
// Check if the player data is available in the local storage
    if playerDataString is not null:
        // Parse the player data from the string representation
        // Define the target elements on the page where player information will be displayed
        targetElements = {
            name: "player-name",
            age: "player-age",
            height: "player-height",
            weight: "player-weight",
            ppg: "player-ppg",
            rpg: "player-rpg",
            apg: "player-apg"
        }
        // Populate the player information on the page using the retrieved player data
    else:
        // If player data is not found in the local storage, show an alert
//Have Event Listener for player search form on both pages



// Keep track of the last selected category
var lastSelectedCategory = '';

// Add the style for the hidden class
// Create a style element
var style = document.createElement('style');
// include style rule for the hidden class, making elements with this class not visible


// Function to show the selected table
function showSelectedTable():
    // Get the select element by ID
    selectElement = element_ID;
    // Get the value of the selected category
    selectedCategory = selectElement.value;

     // Check if the selection changed
     if selectedCategory is not the lastSelectedCategory:
    
        // Retrieve all the tables on the page using the 'table' selector
        tables = [];
        // Iterate over each table and add the 'hidden' class to hide all tables

        // Then show the selected table based on the category
        if selectedtable Exists:
            // remove the 'hidden' class to make it visible
    
        // Store the last selected category
        lastSelectedCategory = selectedCategory;
    
    // Handle Team standings category seperately as it contains two tables
    // Check if the selected category is 'Team Standings'
    if selectedCategory ==  'TeamStandings':
        // Show the additional tables associated with the selected category
        showConferenceTables();
    else:
        // Hide any additional tables that were previously displayed
        hideConferenceTables();     
    
    updateBarChart(selectedCategory);

    // Store the last selected category
    lastSelectedCategory = selectedCategory;
    

// Function to show a pair of tables
function showConferenceTables(table1Id, table2Id):
    table1 = table1_ID;
    table2 = table2Id;

    //remove hidden class for both tables

// Function to hide a pair of tables
function hideConferenceTables(table1Id, table2Id):
    table1 = table1Id;
    table2 = table2Id;

    //Add hidden class to hide both tables
function updateBarChart(category):
    // define Category 
    category = category;

     // Get the canvas rendering context
    ctx = document.getElementById('barChart').getContext('2d');

    // clear display of any charts
    if chart exists:
        // remove the chart

    // Check if the selected category is 'Team Standings'
    if category == Team_Standings:
        // Retrieve tables for western and easter conference
        westernTable = western_conference_data;
        easternTable = easterm_conference_data;
        // Extract data and labels from Eastern and Western Conferences tables and store in respective vars
        data = []
        labels = []
        // Create a bar chart for both conferences 
        window.myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: 
                datasets: [
                    {
                        //fill for eastern conference
                        label: 'Eastern Conference',
                        data: 
                        backgroundColor: 
                        borderColor: 
                        borderWidth: 
                    },
                    {
                        //fill for western conference
                        label: 'Western Conference',
                        data: 
                        backgroundColor: 
                        borderColor: 
                        borderWidth:
                    }
                ]
            },
            options: { },
        });
    
    // if the category is not 'Team Standings':
    else:

        // Extract labels and data from the selected table
        labels = [];
        data = [];

        // Create a new bar chart for the selected category
        window.myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 
                    data: data,
                    backgroundColor: 
                    borderColor: 
                    borderWidth: 
                }]
            },
            options: {},
        });


