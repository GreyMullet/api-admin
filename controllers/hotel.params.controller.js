const { pool }=require("../db/db")

async function fetchHotels(){
    const [rows]=await pool.query("SELECT * FROM hotels")
    return rows
}

module.exports={ fetchHotels }