const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { username: 'tantmse',
                        password: '123456'  
  });
});


module.exports = router;
