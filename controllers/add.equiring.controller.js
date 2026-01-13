const { pool }=require("../db/db")

async function addAccount(req, res){
    const { id, ...params }=req.body

    const values=[
        params.hash_code,
        params.bank_name,
        params.login,
        params.password,
        params.is_active
    ]

    try{
        const result=await pool.query(
            `INSERT INTO accounts
                (hash_code, 
                bank_name,
                login,
                password,
                is_active)
            VALUES
                (?, ?, ?, ?, ?)
            `,
            [...values]
        )

        return res.status(201).json({ affectedRows: result.affectedRows })
    } catch (err){
        res.status(500).json({ error: err.message })
    }
}

module.exports={ addAccount }