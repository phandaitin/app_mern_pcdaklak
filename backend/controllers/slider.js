
const e = require('express')
const jwt = require('jsonwebtoken')
const collection = 'slider'
const myModel = require('../models/' + `${collection}`)

//[GET] /getAll
getAll = async (req, res, next) => {
    try {
        const data =  await myModel.find({})
        return res.status(200).json({
            success: true,
            length: data.length,
            data: data
        })

    } catch (error) {
        res.json(error)
    }
}
 

//[POST] /createOne 
createOne = async (req, res, next) => {
    try {        
        const data = await myModel.create({ ...req.body })
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error..'
        })
    }
}
 
//=======================================================================
module.exports = {
    getAll,
    createOne
}











