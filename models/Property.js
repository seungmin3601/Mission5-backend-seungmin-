// backend/models/Property.js
const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  name: String,
  rent: Number,
  bedrooms: Number,
  shower: Number,
  carparks: Number,
  coordinate1: Number,
  coordinate2: Number,
  image1: String,
  image2: String,
  image3: String,
  image4: String,
  image5: String,
  availabilityDate: String,
  bond: Number,
  description: String,
  features: String,
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
