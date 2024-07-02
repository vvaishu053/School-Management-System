const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const app = express()
const Routes = require("./routes/route.js")

const PORT = process.env.PORT || 5000

dotenv.config();



app.use(express.json({ limit: '10mb' }))
app.use(cors())


app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})
const DB='mongodb+srv://vvaishu053:vaish%4022@cluster0.ysgsq3w.mongodb.net/'
mongoose.connect(DB,{
    useNewUrlParser:true,
}).then(()=>{
    console.log('Database connected.......')
})


