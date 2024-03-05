const express = require("express");
const router = express.Router();

const Train = require('../models/Trains')

router.get("/getalltrains", async(req, res) => {
  try {
    const train = await Train.find({})
    res.send(train);
  } catch (error) {
    return res.status(400).json({message:error})
  }
});

module.exports = router;