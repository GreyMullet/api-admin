const jwt=require("jsonwebtoken")

const secret=process.env.JWT_SECRET
const validPassword=process.env.PASSWORD
const validLogin="Admin"

function jwtCreate(req, res){
    const payload=req.body

    if (payload.login!==validLogin || payload.password!==validPassword){
        return res.status(401).send("unauthorized")
    }

    const token=jwt.sign({ login: payload.login }, secret, { expiresIn: "1h" })

    try{
        res.cookie("jwt", token, {
            httpOnly: true,
            secure: false, // в проде true
            sameSite: "lax",
            maxAge: 1000*60*60
        })
    
        res.status(200).json({ status: "success" })
    } catch (err){
        res.status(500).json({ error: err })
    }
}

module.exports={ jwtCreate }