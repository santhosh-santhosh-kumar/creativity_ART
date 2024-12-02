const express=require('express');
const connectDB=require('./database/mongoDB');
const artWorkImages = require('./Routers/artwork.router')
const artWorkVideos=require('./Routers/artWorkVides.router')
const app = express();
const cors=require('cors');
const path=require('path');
const PORT=process.env.PORT||3001
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use("/Images", express.static(path.join(__dirname, "Images")));
app.use("/Videos", express.static(path.join(__dirname, "Images")));

//routers
app.use('/artwork',artWorkImages)
app.use('/artWorkVideos',artWorkVideos)

app.get('/',(req,res)=>{
    res.send("server on")
    console.log("server on")
})
connectDB()
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})