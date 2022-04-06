
const e = require('express')
const jwt = require('jsonwebtoken')
const collection = 'post'
const myModel = require('../models/' + `${collection}`)

//[GET] /getAll
getAll = async (req, res, next) => {
    try {
        //const { userId} = req.userId         
        //const data =  await myModel.find({}).populate('author' ,'name email -_id').select('content title')
        //const data =  await myModel.find({author: req.userId }).populate('author', ['username']).select('content title')  // TH này để lấy ra bài post của đúng author với   
        //const data =  await myModel.find({}).populate('author')                  // TH này để lấy ra tất cả bài post            
        const data = await myModel.find({}).populate('author', 'name email') 
        //.limit(3)
        .sort({ createdAt: -1 })                 // TH này để lấy ra tất cả thongo tin author
        //const data =  await myModel.find({})
        return res.status(200).json({
            success: true,
            length: data.length,
            data: data
        })

    } catch (error) {
        res.json(error)
    }
}

//[GET] /:categoryName
getByCategory = async (req, res, next) => {
    try {
        let objWhere = {}
        if (req.params.category !== undefined && req.params.category !== 'undefined' && req.params.category !== '')
            objWhere = { category: req.params.category }
        //else objWhere= {}    
        const data = await myModel.find(objWhere)
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        next(error)
    }

}

//[GET] /:id
findOne = async (req, res, next) => {
    try {
        const { id } = req.params
        const data = await myModel.findOne({ _id: id })  // tra ve objec
        //const data = await myModel.findById({_id: id })  // tra ve objec
        //const data = await myModel.find({_id : id})    // tra ve mang
        res.status(200).json({
            success: true,
            //length: data.length,
            data
        })
    } catch (error) {
        next(error)

    }

}

//[POST] /createOne 
createOne = async (req, res, next) => {
    try {
        if (req.file == undefined || !req.file) { // nếu không chọn thì lưu hình mặc định
            req.body.thumb =  'no_avatar.png';
        } else {
            req.body.thumb = req.file.filename;
        }

        console.log('req.file', req.file)
        console.log('req.body.thumb', req.body.thumb)
        const data = await myModel.create({ ...req.body, author: req.userId })
        // --> req.userId là gia trị của hàm verify truyền qua                    
        // author : req.userId --> ngoài post ra lấy thêm author    
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

// router.post('/save', uploadFileMiddleware.uploadFile('thumb', 'images'), myValidate, async (req, res, next) => {
//     try {
//         if (req.file == undefined || !req.file) { // nếu không chọn thì lưu hình mặc định
//             req.body.thumb = 'no_avatar.png';
//         } else {
//             req.body.thumb = req.file.filename;
//         }
//         await myModel.create({ ...req.body, author: req.session.userName })
//         res.redirect(linkIndex);
//     } catch (error) {
//         next(error)
//     }
// })

// [PUT] /updateOne/:id
updateOne = async (req, res, next) => {
    try {
        // const {userId} = req.userId // --> req.user là gia trị của hàm verify truyền qua
        const { id } = req.params
        const data = await myModel.findByIdAndUpdate(id, { ...req.body }, { new: true, runValidators: true })
        //const data = await myModel.findOneAndUpdate( {_id  : id , author : userId  }, { ...req.body }, { new: true, runValidators: true })
        // chỉ update đúng bài post của mình
        res.status(200).json({
            status: 'success',
            data
        })
    } catch (error) {
        next(error)
    }
}


// [DELETE] /deleteOne/:id
deleteOne = async (req, res, next) => {
    try {
        const { id } = req.params
        const data = await myModel.deleteOne({ _id: id })
        //const data = await myModel.deleteOne({ _id: id  , author: req.userId } ) //author: req.userId --> chỉ xóa bài post của đúng user tạo     
        if (!data) {
            return res.status(401).json({
                success: false,
                message: 'Post not found or user not authorised'
            })
        }
        res.status(200).json({
            success: true,
            message: 'Post had been deleted'
        })
    } catch (error) {

        res.status(500).json({
            success: false,
            message: 'khon lay dc authoiation'
        })
    }
}

deleteOne1 = async (req, res, next) => {
    try {
        const { id } = req.params
        const data = await myModel.deleteOne({ _id: id })
        //const data = await myModel.deleteOne({ _id: id  , author: req.userId } ) //author: req.userId --> chỉ xóa bài post của đúng user tạo     
        if (!data) {
            return res.status(401).json({
                success: false,
                message: 'Post not found or user not authorised'
            })
        }
        res.status(200).json({
            success: true,
            message: 'Post had been deleted'
        })
    } catch (error) {

        res.status(500).json({
            success: false,
            message: 'khon lay dc aussssssssssthoiation'
        })
    }
}

// [PUT] /changeStatus/:id/:status
changeStatus = async (req, res, next) => {
    try {
        const { id, status } = req.params
        const status_ = (req.params.status === "active" ? "inActive" : "active");
        //await myModel.findByIdAndUpdate(  id , { status: status_ } , { new: true, runValidators: true })
        //await myModel.updateOne({ _id: id }, { status: status_ })
        await myModel.findOneAndUpdate({ _id: id }, { status: status_ }, { new: true, runValidators: true })
        res.status(200).json({
            status: 'success',
            message: 'Status had been changed...'
        })
    } catch (error) {
        next(error)
    }
}

//=======================================================================
module.exports = {
    getAll,
    //getById     ,
    findOne,
    createOne,
    updateOne,
    deleteOne, deleteOne1,
    changeStatus,
    getByCategory
}











