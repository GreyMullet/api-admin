require('dotenv').config()
const express=require('express')
const cors=require('cors')
const { ROUTES }=require('./routes')
const { jwtCreate }=require('./controllers/auth.controller')
const { fetchHotels }=require('./controllers/hotel.params.controller')
const { checkToken }=require('./middleware/checkToken')
const { updateHotel }=require('./controllers/hotel.update')
const { checkParamsUpdateHotel }=require('./middleware/checkParamsUpdateHotel')
const { checkColumnsDB }=require('./middleware/checkColumnsDB')
const { addParamsHotel }=require('./controllers/add.hotel.controller')
const { addAccount }=require('./controllers/add.equiring.controller')
const { addMail }=require('./controllers/add.mail.controller')
const { fetchBanks }=require('./controllers/banks.params.controller')
const { updateBank }=require('./controllers/bank.update.js')
const { HOTEL_FIELDS, BANK_FIELDS, MAIL_FIELDS }=require('./constants/db.columns.js')
const { fetchMails }=require('./controllers/mails.params.controller.js')
const cookieParser=require("cookie-parser")
const { updateMail }=require('./controllers/mail.update.js')

const PORT=process.env.PORT || 3000

const app=express()

app.use(express.json())
app.use(cors({
    origin: "https://cb08796.tw1.ru", 
    credentials: true
}))
app.use(cookieParser())

// --------------------------- ROUTES ------------------------------

// 1. JWT Generation
app.post(ROUTES['sign-in'], jwtCreate)

// 2. Fetching of hotel params
app.get(ROUTES["fetch-hotel-params"], checkToken, async (_, res)=>{
    try{
        const hotels=await fetchHotels()
        res.status(200).json(hotels)
    } catch (err){
        console.error(err)
        res.status(500).json({ error: "DB error" })
    }
})

// 3. Fetching of banks params
app.get(ROUTES["fetch-banks-params"], checkToken, async (_, res)=>{
    try{
        const banks=await fetchBanks()
        res.status(200).json(banks)
    } catch (err){
        console.error(err)
        res.status(500).json({ error: "DB error" })
    }
})

// 4. Fetching of mail params
app.get(ROUTES["fetch-mails-params"], async (_, res)=>{
    try{
        const mail=await fetchMails()
        res.status(200).json(mail)
    } catch (err){
        console.error(err)
        res.status(500).json({ error: "DB error" })
    }
})

// 5. Updating hotel params
app.patch(ROUTES["update-hotel"], checkToken, checkParamsUpdateHotel, checkColumnsDB(HOTEL_FIELDS), updateHotel)

// 6. updating bank params
app.patch(ROUTES["update-bank"], checkToken, checkParamsUpdateHotel, checkColumnsDB(BANK_FIELDS), updateBank)

// 6. updating mail params
app.patch(ROUTES["update-mail"], checkToken, checkParamsUpdateHotel, checkColumnsDB(MAIL_FIELDS), updateMail)

// 7. Add hotel params
app.post(ROUTES["add-hotel"], checkToken, addParamsHotel)

// 8. Add equiring
app.post(ROUTES["add-equiring"], checkToken, addAccount)

// 9. Add mail
app.post(ROUTES["add-mail"], checkToken, addMail)

// ------------------------- END ROUTES -------------------------------

app.listen(PORT, ()=>{
    console.log(`Server is listening at http://localhost:${PORT}`)
})