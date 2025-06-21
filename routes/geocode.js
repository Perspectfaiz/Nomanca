const express = require('express');
const axios = require('axios');
const router = express.Router();

// Forward Geocoding
router.get('/forward', async (req, res) => {
  const { address } = req.query;
  if (!address) return res.status(400).json({ error: 'Address required' });

  try {
    const response = await axios.get('https://nominatim.openstreetmap.org/search', {
      params: {
        q: address,
        format: 'json',
        addressdetails: 1,
        limit: 1
      },
      headers: {
        'User-Agent': 'your-app-name-or-email@example.com'
      }
    });

    if (response.data.length === 0) {
      return res.status(404).json({ error: 'No results found' });
    }

    res.json(response.data[0]); // returns lat, lon, etc.
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Geocoding failed' });
  }
});

module.exports = router;
