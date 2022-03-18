const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')
const collection = 'auth'
const myModel = require('../models/' + `${collection}`)
/////////////////////////////////////////////////////////////////

//[POST] /register
exports.register = async (req, res, next) => {
  const { email } = req.body
  try {
    const emailValid = await myModel.findOne({ email })
    // if email exists
    if (emailValid)
      return res
        .status(400)
        .json({ success: false, message: 'Email already exists' })
    // all goood
    const user = await myModel.create(req.body)
    const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET)
    res.status(200).json({
      success: true,
      token,
      userName: user.name
    })
  } catch (error) {
    //res.json(error) next(error)
    console.log(error)
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    })
  }
}


//[POST] /login
exports.login = async (req, res, next) => {
  const { email, password } = req.body
  try {
    const user = await myModel.findOne({ email })
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: 'Incorrect Email or Password...' })
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return res
        .status(400)
        .json({ success: false, message: 'Incorrect Email or Password...' })
    } else {
      const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET)
      return res.status(200).json({
        success: true,
        token,
        userName: user.name
      })
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error login' })
  }
}


//[GET] /getAllUser
exports.getAllUser = async (req, res, next) => {
  try {
    const data = await myModel.find({}) 
    res.status(200).json({
      status: 'success',
      result: data.length,
       data
    })
  } catch (error) {
    res.json(error)
  }
}


//[GET] /getAllUser
exports.getCurrentUser = async (req, res, next) => {
  try {
    const user = await myModel.findOne({ _id: req.userId })  // req.userId nhận từ verifyToken
    if (!user) {
      return res
        .status(400)
        .json({
          success: false,
          message: 'User not found'
        })
    } else {
      return res
        .json({
          success: true,
          //user  ,
          userName: user.name
        })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Internal server error getCurrentUser'
    })
  }
}


// module.exports = {
//   getAllUser,
//   getCurrentUser
// }
