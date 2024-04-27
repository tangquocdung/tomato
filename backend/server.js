import express from "express"
import cors from "cors"
import {connectDB} from "./config/db.js"
import FoodRouter from "./routes/FoodRoute.js"
import UserRouter from "./routes/UserRoute.js"
import 'dotenv/config.js'
import CartRouter from "./routes/CartRoute.js"
import OrderRouter from "./routes/OrderRoute.js"



// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

app.get("/",(req, res) => {
    res.send("API Working")
})  

// db connection
connectDB();

// api endpoints
app.use("/api/food", FoodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user",UserRouter)
app.use("/api/cart", CartRouter)
app.use("/api/order", OrderRouter)

app.listen(port,() => {
    console.log(`Server Started on http://localhost:${port}`)
})

