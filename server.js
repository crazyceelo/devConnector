// import packages
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

// import internal files
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

//initialize express
const app = express();

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// app.get("/", (req, res) => res.send("hello!"));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use routes (e.g. localhost:5000/api/users)
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));

  // for any route hit, load the build index.html file isntead of dev index.html
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// variable for production port or local port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
