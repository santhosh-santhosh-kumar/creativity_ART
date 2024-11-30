const express=require('express')
const connectDB=require('./database/mongoDB')
const app = express()

const PORT=3001
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("server on")
    console.log("server on")
})
connectDB()
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})