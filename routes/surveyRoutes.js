const express = require("express");
const Survey = require("../models/Survey");

const router = express.Router();

// General grouping statistics: counting a field by category
async function groupCount(fieldName) {
  const results = await Survey.aggregate([
    { $group: { _id: `$${fieldName}`, value: { $sum: 1 } } },
    { $project: { _id: 0, category: "$_id", value: 1 } },
    { $sort: { value: -1 } }
  ]);
  return results.filter(r => r.category);
}

// Home
router.get("/", (req, res) => {
  res.render("form");
});

// Submit Form
router.post("/submit", async (req, res) => {
  const { travelStyle, travelFrequency, dreamContinent, budgetRange } = req.body;

  await Survey.create({
    travelStyle,
    travelFrequency,
    dreamContinent,
    budgetRange
  });

  res.redirect("/success");
});

// Success Page
router.get("/success", (req, res) => {
  res.render("success");
});

// Pie Page：Travel Style
router.get("/pie", async (req, res) => {
  const pieData = await groupCount("travelStyle");
  res.render("pie", { pieData });
});

// Bar Page：Travel Frequency
router.get("/bar", async (req, res) => {
  const barData = await groupCount("travelFrequency");
  // A fixed order looks better
  const order = ["Rarely", "Once a year", "2–3 times per year", "More than 3 times per year"];
  barData.sort((a, b) => order.indexOf(a.category) - order.indexOf(b.category));
  res.render("bar", { barData });
});

// Map Page：Dream Continent
router.get("/map", async (req, res) => {
  const mapData = await groupCount("dreamContinent");
  res.render("map", { mapData });
});

module.exports = router;