const bcrypt = require('bcrypt');
const user = require('../models/user');
const jwt = require('jsonwebtoken');

exports.createUserForm = (req, res) => {
    res.render('sign', { })
  }

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 5)
        .then(hash => {
            const user = new user({
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: 'user créé'}))
                .catch(error => res.status(400).json({error})); 
        })
        .catch(error => res.status(500).json({error}))
};

exports.login = (req, res, next) => {
    user.findOne({email : res.body.email})
        .then(user => {
            if (user === null) {
                res.status(401).json({message: 'Paire identifiant mot de passe incorrect'})
            }
            else {
                bcrypt.compare(req.body.password,user.password)
                    .then(valid=> {
                        if(!valid){
                            res.status(401).json({message: 'Paire identifiant mot de passe incorrect'})
                        }
                        else {
                            res.status(200).json({
                                userId: user._id,
                                token : jwt.sign(
                                    { userId : user._id },
                                    'RANDOM_TOKEN_SECRET',
                                    { expiresIn: '24H'}
                                )
                            })
                        }
                    })
                    .catch(res.status(500).json({error}) )
            }
        })
        .catch(error => res.status(500).json({error}))

};