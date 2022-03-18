 


const express = require('express')
const router = express.Router()

const collection    = 'post'
const controller = require('../controllers/'+`${collection}`) 
const {verifyToken} = require('../middlewares/verifyToken')

router.get('/',     controller.getAll )

//router.get('/',  verifyToken,   controller.getAll )

router.get('/category(/:category)?', controller.getByCategory )

router.get('/:id',     controller.findOne ) 

router.post('/',  verifyToken, controller.createOne )

router.put('/:id',    controller.updateOne )

router.delete('/:id',    controller.deleteOne )

router.delete('/delete/abc/?:id',    controller.deleteOne1 )

router.put('/changeStatus/:id/:status',     controller.changeStatus )

module.exports =  router
