const express = require('express');
const { getAll, create, getById } = require('../controllers/catController.js');

const router = express.Router();


router.get('/:id', getById)
router.get('/', getAll)
router.post('/',create)


module.exports = router
