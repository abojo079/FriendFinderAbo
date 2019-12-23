const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

require(path.join((`${__dirname}../FriendFinder/routing/apiRoutes`))(app);
require(path.join(`${__dirname}../FriendFinder/routing/apiRoutes`))(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.text());

app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});



app.listen(PORT, function() {
  console.log('Listening on PORT: ' + PORT);
});