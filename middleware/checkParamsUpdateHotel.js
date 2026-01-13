function checkParamsUpdateHotel(req, res, next){
    const { id, ...params }=req.body

    if (id!==0 && !id){
        return res.status(400).send("Id is not passed")
    }

    if (!Object.keys(params).length){
        return res.status(400).send("Params are not passed")
    }

    next()
}

module.exports={ checkParamsUpdateHotel }