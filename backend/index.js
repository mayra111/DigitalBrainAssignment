const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const GOOGLE_CUSTOM_SEARCH_API_KEY = "AIzaSyDRoHpp0ZqJjG-b7TmGQs9JuqBivu2WM_k"; // Replace with your API key

app.get("/api/search", async (req, res) => {
  const { q } = req.query;

  try {
    const response = await axios.get(
      //   `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_CUSTOM_SEARCH_API_KEY}&q=${q}`
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyDRoHpp0ZqJjG-b7TmGQs9JuqBivu2WM_k&cx=017576662512468239146:omuauf_lfve&q=${q}`
    );
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching search results:", error);
    res.status(500).json({ error: "Error fetching search results" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
