const express = require('express');
const router = express.Router();
const controllerUser = require('../controllers/user.controller');
const validateUser = require('../validate/user.validate');

router.get('/', controllerUser.getAll);

// router.get('/cookie', function(req, res, next) {
//     res.cookie('user-id', 12345);
//     res.send('Hello world!');
// });

router.get('/search', controllerUser.search);

router.get('/create', controllerUser.create);

router.get('/:id', controllerUser.getOne);

router.post('/create', validateUser.postCreate, controllerUser.postCreate);

module.exports = router;