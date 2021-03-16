const router = require('express').Router()
const { userController } = require('../controllers')
const { verifyToken } = require('../helpers/jwtHelper')



router.post('/keepLogin', verifyToken, userController.keepLogin)
router.post('/login', userController.login)

module.exports = router