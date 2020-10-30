const express = require('express');
const router = express.Router();
const shortid = require('shortid');
const db = require('../db');
const controllerUser = require('../controllers/user.controller');

router.get('/', controllerUser.getAll);

router.get('/search', controllerUser.search);

router.get('/create', controllerUser.create);

router.get('/:id', controllerUser.getOne);

router.post('/create', controllerUser.postCreate);

module.exports = router;