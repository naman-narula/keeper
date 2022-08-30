require('dotenv').config();
const express=require('express');
const app=express();
const mongoogse=require('mongoose');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const cors=require('cors');
const morgan =require('morgan');
const path=require('path');
mongoogse.connect(process.env.DB_String,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }).then(console.log("DB Connected"))
  .catch((err)=>{
      console.log(new Error(err));
  });

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'build')))

const registerRoute=require("./routes/register");
const homeRoute=require("./routes/home");
const loginRoute=require("./routes/login");


app.use("/api",registerRoute);
app.use("/api",loginRoute);
app.use("/api",homeRoute);
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'))
})





app.listen(process.env.PORT||3000,()=>{
    console.log(`Server running on ${process.env.PORT}`);
})