const express = require('express');
const router = express.Router();
const { School } = require('../models');

// Add School API
router.post('/addSchool', async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || latitude == null || longitude == null) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const newSchool = await School.create({ name, address, latitude, longitude });
    res.status(201).json({ message: 'School added successfully!', school: newSchool });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// List Schools API
router.get('/listSchools', async (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: 'Latitude and longitude are required.' });
  }

  try {
    const schools = await School.findAll();
    const userLat = parseFloat(latitude);
    const userLong = parseFloat(longitude);

    const sortedSchools = schools
      .map((school) => {
        const distance = Math.sqrt(
          Math.pow(userLat - school.latitude, 2) + Math.pow(userLong - school.longitude, 2)
        );
        return { ...school.dataValues, distance };
      })
      .sort((a, b) => a.distance - b.distance);

    res.status(200).json(sortedSchools);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
