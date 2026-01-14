const { pool }=require("../db/db")

async function fetchMails(){
    const [rows]=await pool.query("SELECT * FROM mails")
    return rows
}

module.exports={ fetchMails }