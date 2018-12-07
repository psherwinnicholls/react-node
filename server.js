const express = require("express");
const fs = require('fs')

const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

const YAML = require('yaml')
const file = fs.readFileSync('./data.yml', 'utf8')
const data = YAML.parse(file)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// API calls
app.get("/api", (req, res) => {
  res.send(data);
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));
