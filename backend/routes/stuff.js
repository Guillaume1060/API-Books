const express = require('express');
// const auth = require('../middleweare/auth')
const router = express.Router();
const stuffCtrl = require('../controllers/stuff');



router.get('/', stuffCtrl.getAllBooks);
router.get('/creation', stuffCtrl.createbookForm);
router.post('/creation', stuffCtrl.createbook);
router.get('/:id', stuffCtrl.getOnebook);
router.put('/:id', stuffCtrl.modifybook);
router.delete('/delete/:id', stuffCtrl.deletebook);

module.exports = router;