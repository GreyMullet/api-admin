const { pool }=require("../db/db")
const { setParams }=require("../utils/setParams")

async function updateHotel(req, res){
    try{
        const { id, ...params }=req.body

        const [setClause, values]=setParams(params)

        const result=await pool.query(
            `UPDATE hotels SET ${setClause} WHERE id=?`,
            [...values, id]
        )

        return res.status(201).json({ affectedRows: result.affectedRows })
    } catch(err){
        console.error(err)
        return res.status(500).send({ error: "Server error" })
    }
}

module.exports={ updateHotel }