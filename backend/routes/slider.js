 


const express = require('express')
const router = express.Router()

const collection    = 'slider'
const controller = require('../controllers/'+`${collection}`) 

router.get('/',     controller.getAll )
router.post('/',    controller.createOne )
 
module.exports =  router
