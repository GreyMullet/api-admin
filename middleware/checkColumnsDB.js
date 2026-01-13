function checkColumnsDB(fields){
    return function (req, res, next){
        const { id, ...params }=req.body
    
        for (const key of Object.keys(params)){
            if (!fields.includes(key)){
                return res.status(400).send(`Param doesn't exist in columns: ${key}`)
            }
        }
    
        next()
    }
}

module.exports={ checkColumnsDB }