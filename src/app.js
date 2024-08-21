const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const hbs = require("hbs");

require("./db/conn");
const UserCollection = require("./models/users");
const { json } = require("express");

const app = express();
const port = process.env.PORT || 3001;
const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

// app.use()
app.use(express.static(static_path));

// app.set()
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

// app.get()
app.get("/", function (req, res) {
  res.render("index");
});

// app.post()
app.post("/", function (req, res) {
  console.log("OK");
});

// app.listen()
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
