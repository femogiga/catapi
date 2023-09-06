const express = require('express');
const { getAll, create, getById, getCount,getPhotos } = require('../controllers/catController.js');

const router = express.Router();

router.get('/count', getCount)
router.get('/photos/:id', getPhotos)
router.get('/:id', getById)
router.get('/', getAll)
router.post('/', create)



module.exports = router
