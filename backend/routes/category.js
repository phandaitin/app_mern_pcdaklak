
const express = require('express')
const router = express.Router()

const collection    = 'category'
const controller = require('../controllers/'+`${collection}`) 

router.get('/',     controller.getAll )

router.get('/:id',     controller.getById )

router.get('/:id',     controller.findOne )

router.post('/',    controller.createOne )

router.put('/:id',    controller.updateOne )

router.delete('/:id',   controller.deleteOne )

router.put('/changeStatus/:id/:status',  controller.changeStatus )

module.exports =  router
