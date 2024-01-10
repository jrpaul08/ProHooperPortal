//REST API demo in Node.js
var express = require('express'); // web application framework for Node.js
var app = express();
var cors = require('cors'); // Import the cors middleware
var fs = require('fs'); //Node.js File System module for file-related operations

// Enable CORS for all routes
app.use(cors());

/*
app.get() defines the Endpoint
Defines a single endpoint '/player_info' using the HTTP Get method 

The endpoint reads the contents of a JSON file named data.json.
The fs.readFile function is used to read the file asynchronously.

If the file is read successfully, the content of the file is logged to the console, and the file's content is sent as the response


 */
app.get('/player_info', function(req, res){

    var filePath = __dirname + "/public/data.json";

    fs.readFile(filePath, 'utf8', function(err, data){
        if (err){
            console.error("Error reading data.json:", err);
            res.status(500).send("Internal Server Error");
            return;   
        }
        console.log(data);
        res.end(data); // you can also use res.send()
    });
})

// Create a server to listen at port 8080
var server = app.listen(8080, function(){
    var host = server.address().address;
    var port = server.address().port;
    
    // Change the console log to output a more specific message
    console.log(`REST API demo app listening at http://localhost:${port}/player_info`);
})