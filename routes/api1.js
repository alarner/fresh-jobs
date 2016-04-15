let express = require('express');
let router = express.Router();
let path = require('path');
let bookshelfApi = require('bookshelf-api')({
	path: path.join(__dirname, '../models')
});

router.use('/company', bookshelfApi);

// router.get('/products', function(req, res, next) {

// });

module.exports = router;
