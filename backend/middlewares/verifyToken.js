const jwt = require('jsonwebtoken')
exports.verifyToken = (req, res, next) => {
    const authorization = req.header('Authorization')
    if (!authorization) {
        return res
            .status(401)
            .json({ success: false, message: 'Access token not found. huhu' })
    }
    // get tokens
    const token = authorization.replace('Bearer ', '')    // OR     const token = authorization.split(' ')[1]    
    try {
        const decode  = jwt.verify(token, process.env.APP_SECRET)
        req.userId = decode.userId         // khác với  req.userId = userId 
        next()

    } catch (error) {
        console.log(error)
        return res.status(403).json({ success: false, message: 'Invalid token' })
    }

}
/* tutran
exports.verifyToken =(req,res,next)=>{
    const authorization = req.header('Authorization')

    if(!authorization){         // error: chuwnsg thuwcj
        const err = new Error('Unauthorization...')
        err.statusCode = 401
        return next(err)
    }
    // get tokens
    const token = authorization.replace('Bearer ', '')    // OR const token = authorization.split(' ')[1]
    //verify token
    const {userId}  = jwt.verify(token, process.env.APP_SECRET)
    // Gan cho req    
    req.user = {userId}
    next()
}

// henry
const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization')
    const token = authHeader && authHeader.split(' ')[1]

    if (!token)
        return res
            .status(401)
            .json({ success: false, message: 'Access token not found' })

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        req.userId = decoded.userId
        next()
    } catch (error) {
        console.log(error)
        return res.status(403).json({ success: false, message: 'Invalid token' })
    }
}

module.exports = verifyToken

*/