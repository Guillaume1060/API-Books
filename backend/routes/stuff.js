const express = require('express');
const auth = require('../middleweare/auth')
const router = express.Router();



const stuffCtrl = require('../controllers/stuff');

router.get('/',auth, stuffCtrl.getAllStuff);
router.post('/',auth, stuffCtrl.createbook);
router.get('/:id',auth, stuffCtrl.getOnebook);
router.put('/:id',auth, stuffCtrl.modifybook);
router.delete('/:id',auth, stuffCtrl.deletebook);

module.exports = router;