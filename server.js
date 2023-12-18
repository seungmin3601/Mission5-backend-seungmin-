// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const apiRoutes = require("./routes/api");
const Property = require("./models/Property"); // Import the Property model

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use("/api", apiRoutes);

app.get("/", async (req, res) => {
  try {
    // Fetch properties from the database
    const properties = await Property.find();
    // Send the properties as a JSON response
    res.json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

mongoose.connect("mongodb://localhost/properties", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
