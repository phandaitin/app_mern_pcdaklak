 
const jwt = require('jsonwebtoken')
const collection = 'category'
const myModel = require('../models/' + `${collection}`)
 
//[GET] /getAll
getAll = async (req, res, next) => {
    try {                        
        //const { userId} = req.userId         
        //const data =  await myModel.find({}).populate('author' ,'name email -_id').select('content title')
        //const data =  await myModel.find({author: userId }).populate('author', 'name')  // TH này để lấy ra bài post của đúng author với   
        const data =  await myModel.find({}) //.select('name slug status')                  // TH này để lấy ra tất cả bài post    
        return res.status(200).json({
            success:true,
            length : data.length ,
            data
        })
        //res.json(data)
        //res.json({ success: true, posts })
        // return res.json({
        //     success: true,  
        //     //user  ,
        //     userName : user.name
        // })

    } catch (error) {
        res.json(error)
    }
}

//[GET] /:id
getById = async(req, res, next) => {        
    try {
        const { id } = req.params
        const data = await myModel.find({_id : id})
        res.status(200).json({
            success: true,
            data  
        })
    } catch (error) {
        next(error)        
    }
    
 }  

 //[GET] /:id
findOne = async(req, res, next) => {        
    try {
        const { id } = req.params
        const data = await myModel.findOne({_id : id})
        res.status(200).json({
            success: true,
            data  
        })
    } catch (error) {
        next(error)        
    }
    
 }  

//[POST] /createOne
createOne = async (req, res, next) => {
    
    const { name } = req.body
    try {
      const checkExists = await myModel.findOne({ name })
      // if name  exists
      if (checkExists)
        return res
          .status(400)
          .json({ success: false, message: 'Category Name has already exists...' })
      // all goood
      const data = await myModel.create(req.body)      
      res.status(200).json({
        success: true,
        data
      })
    } catch (error) {
      return res.status(500).json({          
        success: false,
        message: 'Internal server error'
      })
    }
  }

// [PUT] /updateOne/:id
updateOne = async (req, res, next) => {
    try {
        
        const { id } = req.params        
        const data = await myModel.findOneAndUpdate( {_id  : id   }, { ...req.body }, { new: true, runValidators: true })        
        res.status(200).json({
            success: true ,
            data  
        })
    } catch (error) {
        next(error)
    }
}
    

// [DELETE] /deleteOne/:id
deleteOne =async (req, res, next) => {        
    try {
        const { id } = req.params       
        await myModel.deleteOne({ _id: id } ) //await myModel.findByIdAndDelete(id)   
        // chỉ xóa bài post của đúng user tạo     
        res.status(200).json({
            status  :'success',
            message :'One category had been deleted'
        })
    } catch (error) {
        next(error)
    }
}

// [PUT] /changeStatus/:id/:status
changeStatus =  async (req, res, next) => {
    try {
        const { id , status } = req.params                
        const status_   =  ( req.params.status === "active" ? "inactive" : "active" );        
        //await myModel.findByIdAndUpdate(  id , { status: status_ } , { new: true, runValidators: true })
        await myModel.findOneAndUpdate( {_id  : id  }, { status : status_ }, { new: true, runValidators: true })
        //await myModel.updateOne({ _id: id }, { status: status_ })
        res.status(200).json({
            status  :'success',
            message :'Status had been changed...'
        })
    } catch (error) {
        next(error)
    }
} 

//=======================================================================
module.exports =   {    
    getAll      ,
    getById     ,
    findOne,
    createOne   ,
    updateOne   ,
    deleteOne   ,
    changeStatus
}










