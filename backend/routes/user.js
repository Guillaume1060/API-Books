const express = require('express');
const router = express.Router ();
const userCtrl = require('../controllers/user');

router.post('/sign', userCtrl.createUserForm);
router.post('/sign',userCtrl.signup); 
router.post('',userCtrl.login)




module.exports = router;



