const express=require('express');
const connectDB=require('./database/mongoDB');
const route = require('./Routers/artwork.router')
const app = express();
const cors=require('cors');

const PORT=process.env.PORT||3001
app.use(express.json());
app.use(cors())

app.use('/gallary',route)

app.get('/',(req,res)=>{
    res.send("server on")
    console.log("server on")
})
connectDB()
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})