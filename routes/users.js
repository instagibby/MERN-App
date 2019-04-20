const express = require('express');
const router = express.Router();
const data = require('../data/data.json');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.status(200).json({
    success: 'true',
    message: 'data recieved successfully',
    data: data
  })
});
    

module.exports = router;
