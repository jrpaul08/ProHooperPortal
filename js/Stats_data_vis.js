// script.js

// Keep track of the last selected category
var lastSelectedCategory = '';

// Add the style for the hidden class
var style = document.createElement('style');
style.innerHTML = '.hidden { display: none; }';
document.head.appendChild(style);

// script.js

// Keep track of the last selected category
var lastSelectedCategory = '';

// Add the style for the hidden class
var style = document.createElement('style');
style.innerHTML = '.hidden { display: none; }';
document.head.appendChild(style);

function showSelectedTable() {
    var selectElement = document.getElementById("selectCategory");
    var selectedCategory = selectElement.value;

    // Check if the selection changed
    if (selectedCategory !== lastSelectedCategory) {
        // Hide all tables
        var tables = document.querySelectorAll('table');
        tables.forEach(function(table) {
            table.classList.add('hidden');
        });

        // Show the selected table
        var selectedTable = document.getElementById("table" + selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1));
        if (selectedTable) {
            selectedTable.classList.remove('hidden');
        }

        // Handle Team Standings tables separately
        if (selectedCategory.toLowerCase() === 'teamstandings') {
            // Show the Western and Eastern Conference tables
            var westernTable = document.getElementById("tableWestern");
            var easternTable = document.getElementById("tableEastern");

            westernTable.classList.remove('hidden');
            easternTable.classList.remove('hidden');
        } else {
            // Hide the Western and Eastern Conference tables
            var westernTable = document.getElementById("tableWestern");
            var easternTable = document.getElementById("tableEastern");

            westernTable.classList.add('hidden');
            easternTable.classList.add('hidden');
        }
        // Update the bar chart
        updateBarChart(selectedCategory);

        // Store the last selected category
        lastSelectedCategory = selectedCategory;
    }
}

function updateBarChart(category) {
    category = category;
    var ctx = document.getElementById('barChart').getContext('2d');

    if (window.myChart) {
        window.myChart.destroy();
    }

    if (category.toLowerCase() === 'teamstandings') {
        var westernTable = document.getElementById("tableWestern");
        var easternTable = document.getElementById("tableEastern");

        function getDataAndLabels(table) {
            var data = Array.from(table.querySelectorAll('tbody tr td:nth-child(3)')).map(td => parseFloat(td.textContent));
            var labels = Array.from(table.querySelectorAll('tbody tr td:nth-child(2)')).map(td => td.textContent);
            return { data, labels };
        }

        var { data: dataEastern, labels: labelsEastern } = getDataAndLabels(easternTable);
        var { data: dataWestern, labels: labelsWestern } = getDataAndLabels(westernTable);

        window.myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labelsEastern.concat(labelsWestern),
                datasets: [
                    {
                        label: 'Eastern Conference',
                        data: dataEastern.concat(Array(labelsWestern.length).fill(null)),
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Western Conference',
                        data: Array(labelsEastern.length).fill(null).concat(dataWestern),
                        backgroundColor: 'rgba(255, 0, 0, 0.2)',
                        borderColor: 'rgba(255, 0, 0, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            precision: 1,
                        },
                    },
                },
            },
        });
    } else {
        var tableId = "table" + category.charAt(0).toUpperCase() + category.slice(1);
        var table = document.getElementById(tableId);

        var rows = table.getElementsByTagName('tr');
        var labels = [];
        var data = [];

        for (var i = 1; i < rows.length; i++) {
            var cols = rows[i].getElementsByTagName('td');
            labels.push(cols[0].textContent);
            data.push(parseFloat(cols[1].textContent));
        }

        window.myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: category.charAt(0).toUpperCase() + category.slice(1),
                    data: data,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            precision: 1,
                        },
                    },
                },
            },
        });
    }
}


