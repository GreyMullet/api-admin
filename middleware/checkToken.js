const jwt=require("jsonwebtoken")
const secret=process.env.JWT_SECRET

function checkToken(req, res, next){
    const token=req.cookies.jwt

    if (!token){
        return res.status(401).send("Token is not installed or doesn't exist" )
    }

    try{
        const decoded=jwt.verify(token, secret)
        req.user=decoded
        next()
    } catch(err){
        return res.status(401).send("Invalid or expired token")
    }
}

module.exports={ checkToken }