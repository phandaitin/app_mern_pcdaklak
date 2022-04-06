 


const express = require('express')
const router = express.Router()

const collection    = 'post'
const controller = require('../controllers/'+`${collection}`) 
const {verifyToken ,} = require('../middlewares/verifyToken')
const { uploadFile} = require('../middlewares/uploadFile')

router.get('/',     controller.getAll )

//router.get('/',  verifyToken,   controller.getAll )

router.get('/category(/:category)?', controller.getByCategory )

router.get('/:id',     controller.findOne ) 

router.post('/' , verifyToken,   uploadFile ('thumb', 'uploads') , controller.createOne )
//router.post('/' , verifyToken, controller.createOne )

router.put('/:id',    controller.updateOne )

router.delete('/:id',    controller.deleteOne )

router.delete('/delete/abc/?:id',    controller.deleteOne1 )

router.put('/changeStatus/:id/:status',     controller.changeStatus )


//router.post('/singleFile', upload.single('file'), controller.singleFileUpload);
// export const singleFileUpload = async (data, options) => {
//     try {
//         await axios.post(apiUrl + 'singleFile', data, options);
//     } catch (error) {
//         throw error;
//     }
// }

module.exports =  router
