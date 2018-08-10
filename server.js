// import packages
const express = require("express");
const mongoose = require("mongoose");

// import internal files
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

//initialize express
const app = express();

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("hello!"));

// Use routes (e.g. localhost:5000/api/users)
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

// variable for production port or local port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
