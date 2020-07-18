/**
 * @author Shutao Shen
 * @type {createApplication}
 */
const express = require('express');

// Express route
const router = express.Router();
/**
 * how to register an authentication(here only handle the name password)
 * the profile is not in this route
 */

let Authentication = require('../src/models/authentication.model');

const moment = require('moment')
const objectIdToTimestamp = require('objectid-to-timestamp')
const sha1 = require('sha1')

const createToken = require('./middlewares/createToken')
const checkToken = require('./middlewares/checkToken')


/**
 * register schema:
 * post: /authentication/
    {
        "name":"sst",
        "password":"pass"
    }
 * @param req
 * @param res
 */
const handleRegister = (req, res) => {
    console.log("handleRegister")
    let authRegister = new Authentication({
        name: req.body.name,
        password: sha1(req.body.password),
        token: createToken(this.name)
    })
    console.log("de1")
    authRegister.create_time = moment(objectIdToTimestamp(authRegister._id))
        .format('YYYY-MM-DD HH:mm:ss');

    Authentication.findOne({
        name: authRegister.name
    })
        .then(user => {
            if (user) {
                res.json({
                    success: false,
                    message: `the name ${authRegister.name} exists`
                })
            } else {
                authRegister.save((err, user) => {
                    if (err) {
                        res.json(err)
                        console.log("123123")
                    } else {
                        res.json(user)
                    }
                })
            }
        })
        .catch(err => res.json(err))
}
/**
 * login schema:
 *  post: /authentication/sst
 *  {
        "password":"pass"
    }
 * @param req
 * @param res
 */
const handleLogin = (req, res) => {
    let authLogin = new Authentication({
        name: req.params.name,
        password: sha1(req.body.password),
        token: createToken(this.name)
    })
    Authentication.findOne({
        name: authLogin.name
    })
        .then(user => {
            if (!user) {
                res.json({
                    success: false,
                    message: "the name does not exist!"
                })
            } else if (authLogin.password === user.password) {
                // auth successful!
                let name = authLogin.name;
                let thisToken = createToken(name);
                user.token = thisToken;
                // save the token back to mongo
                user.save();
                res.json({
                    success: true,
                    message: "The authentication is successful!",
                    name: name,
                    token: thisToken
                })
            } else {
                res.json({
                    success: false,
                    message: "wrong password!"
                })
            }
        })
        .catch(err => res.json(err))
}
// todo: add methods like "change password" ....

/**
 *  the relative path is /authentication
 * @param router
 */
router.route('/').post( handleRegister);
router.route('/:name').post( handleLogin);

module.exports = router;
