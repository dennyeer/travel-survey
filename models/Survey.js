const mongoose = require("mongoose");

const SurveySchema = new mongoose.Schema(
  {
    travelStyle: String,
    travelFrequency: String,
    dreamContinent: String,
    budgetRange: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Survey", SurveySchema);