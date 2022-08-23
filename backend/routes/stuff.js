const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');

router.get('/', stuffCtrl.getAllStuff);
router.post('/', stuffCtrl.createbook);
router.get('/:id', stuffCtrl.getOnebook);
router.put('/:id', stuffCtrl.modifybook);
router.delete('/:id', stuffCtrl.deletebook);

module.exports = router;