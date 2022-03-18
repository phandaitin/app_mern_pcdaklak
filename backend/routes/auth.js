
const express = require('express')
//const { checkCurrentUser } = require('../middlewares/checkCurrentUser')
const { verifyToken } = require('../middlewares/verifyToken')
const router = express.Router()

const collection = 'auth'

const { register, login, getAllUser, getCurrentUser } = require('../controllers/' + `${collection}`)
router.post('/register', register)
router.post('/login', login)
router.get('/', getAllUser)
router.get('/getCurrentUser', verifyToken, getCurrentUser)

module.exports = router

// Cách viết cũ xem bên category