const { pool }=require("../db/db")

async function addMail(req, res){
    const {
        hash_code,
        smtp_host,
        smtp_port,
        smtp_secure,
        smtp_username,
        smtp_password,
        smtp_from_email,
        smtp_from_name
    }=req.body

    if (
        !hash_code ||
        !smtp_host ||
        !smtp_port ||
        !smtp_username ||
        !smtp_password ||
        !smtp_from_email
    ){
        return res.status(400).json({ error: "Missing required fields" })
    }

    try{
        const [result]=await pool.query(
            `
            INSERT INTO mails (
                hash_code,
                smtp_host,
                smtp_port,
                smtp_secure,
                smtp_username,
                smtp_password,
                smtp_from_email,
                smtp_from_name
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `,
            [
                hash_code,
                smtp_host,
                smtp_port,
                smtp_secure || "false",
                smtp_username,
                smtp_password,
                smtp_from_email,
                smtp_from_name || ""
            ]
        )

        return res.status(201).json({
            id: result.insertId,
            affectedRows: result.affectedRows
        })
    } catch (err){
        console.error("ADD MAIL ERROR:", err)

        if (err.code==="ER_NO_REFERENCED_ROW_2"){
            return res.status(409).json({
                error: "Hotel with this hash_code does not exist"
            })
        }

        if (err.code==="ER_DUP_ENTRY"){
            return res.status(409).json({
                error: "Mail config already exists for this hotel"
            })
        }

        return res.status(500).json({
            error: "Internal server error"
        })
    }
}

module.exports={ addMail }