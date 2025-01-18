import env from 'dotenv'
env.config()
import express from 'express'
import cors from 'cors'
import { userrouter } from './routers/userRouter.js'
import {connect} from 'mongoose'
import { productRouter } from './routers/productRouter.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/mit',userrouter)
app.use('/mit',productRouter)




const PORT=process.env.PORT ||3000
const mongo_url=process.env.MONGODB_URL
app.listen(PORT,()=>{
    try{
        connect(mongo_url)
        console.log("mongodb connected successfully")
        console.log(`Server Running on http://localhost${PORT}`)
    }catch(error){
        console.error("Failed to connect to mongodb")
        process.exit(1)
    }
})