var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  
  if (req.params.id === '0'){
    res.json(
      {
        'id': 0,
        'name': 'spencer',
      }
    );
  } else if (req.params.id === '1'){
    res.json(
      {
        'id': 1,
        'name': 'nathan',
      }
    );
  } else if (req.params.id === '2') {
    res.json(
      {
        'id': 2,
        'name': 'keith',
      }
    );
  } else {
    res.send('No results');
  }
});
    

module.exports = router;
