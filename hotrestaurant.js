// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Star Wars Characters (DATA)
// =============================================================
var reservations = [{
  customerName: "tali",
  phoneNumber: "415-359-3132",
  customerEmail: "tali@email.com",
  customerID: "1",

}, {
  customerName: "val",
  phoneNumber: "510-755-0301",
  customerEmail: "val@email.com",
  customerID: "2",
}];
//
//
// // Routes
// // =============================================================
//
// // Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});


// Get all characters
// app.get("/all", function(req, res) {
//   res.json(characters);
// });
//
// // Search for Specific Character (or all characters) - provides JSON
// app.get("/api/:characters?", function(req, res) {
//   var chosen = req.params.characters;
//
//   if (chosen) {
//     console.log(chosen);
//
//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         return res.json(characters[i]);
//       }
//     }
//     return res.json(false);
//   }
//   return res.json(characters);
// });
//
// // Create New Reservations - takes in JSON input
app.post("/api/new", function(req, res) {
  var newreservations = req.body;
  newreservations.routeName = newreservations.customerName.replace(/\s+/g, "").toLowerCase();

  console.log(newreservations);

  reservations.push(newreservations);

  res.json(newreservations);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
