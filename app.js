const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const surveyRoutes = require("./routes/surveyRoutes");

const app = express();

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/surveyDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Parse form data (non-AJAX)
app.use(express.urlencoded({ extended: true }));

// Static resources
app.use(express.static(path.join(__dirname, "public")));

// Template engine
app.set("view engine", "ejs");

// router
app.use("/", surveyRoutes);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});