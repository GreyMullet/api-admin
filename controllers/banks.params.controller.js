const { pool }=require("../db/db")

async function fetchBanks(){
    const [rows]=await pool.query("SELECT * FROM accounts")
    return rows
}

module.exports={ fetchBanks }