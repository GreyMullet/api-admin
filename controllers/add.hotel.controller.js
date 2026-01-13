const { pool }=require("../db/db")

async function addParamsHotel(req, res){
    const { id, ...params }=req.body

    const values=[
        params.hash_code,
        params.hotel_id,
        params.hotel_name,
        params.wsdl_url,
        params.wsdl_login,
        params.wsdl_password,
        params.quota,
        params.site_url,
        params.time_check_in,
        params.time_check_out,
        params.payment_method,
        params.payment_section,
        params.description
    ]

    try{
        const result=await pool.query(
            `INSERT INTO hotels
                (hash_code, 
                hotel_id, 
                hotel_name, 
                wsdl_url,
                wsdl_login,
                wsdl_password,
                quota,
                site_url,
                time_check_in,
                time_check_out,
                payment_method,
                payment_section,
                description)
            VALUES
                (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `,
            [...values]
        )

        return res.status(201).json({ affectedRows: result.affectedRows })
    } catch (err){
        res.status(500).json({ error: err.message })
    }
}

module.exports={ addParamsHotel }