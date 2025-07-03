const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("NASA Backend Running!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});

// Add this at the top with your other imports
// const axios = require('axios'); // Already imported!
app.get('/apod', async (req, res) => {
  try {
    const apiKey = process.env.NASA_API_KEY;
    const nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    const response = await axios.get(nasaUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch APOD' });
  }
});

app.get('/epic/latest', async (req, res) => {
  try {
    const apiKey = process.env.NASA_API_KEY;
    const metaUrl = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`;
    const metaResponse = await axios.get(metaUrl);
    const images = metaResponse.data;
    if (!images || images.length === 0) {
      return res.status(404).json({ error: 'No EPIC images found.' });
    }
    const image = images[0];
    const [year, month, day] = image.date.substr(0, 10).split('-');
    const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${image.image}.png`;
    res.json({
      date: image.date,
      caption: image.caption,
      imageUrl,
      identifier: image.identifier
    });
  } catch (error) {
    // Add this:
    console.error('EPIC Error:', error?.response?.data || error.message || error);
    res.status(500).json({ error: 'Failed to fetch EPIC image.' });
  }
});


// NASA Image and Video Library Search API
app.get('/search', async (req, res) => {
  try {
    const q = req.query.q;
    if (!q) return res.status(400).json({ error: 'Query required' });
    const nasaUrl = `https://images-api.nasa.gov/search?q=${encodeURIComponent(q)}&media_type=image`;
    const response = await axios.get(nasaUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch NASA images.' });
  }
});
