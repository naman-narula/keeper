require('dotenv').config();
const express=require('express');
const app=express();
const mongoogse=require('mongoose');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const cors=require('cors');
const morgan =require('morgan');
mongoogse.connect("'mongodb://localhost:27017/test",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }).then(console.log("DB Connected"))
  .catch((err)=>{
      console.log(new Error(err));
  });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'));

const registerRoute=require("./routes/register");
const homeRoute=require("./routes/home");
const loginRoute=require("./routes/login");


app.use("/api",registerRoute);
app.use("/api",loginRoute);
app.use("/api",homeRoute);





app.listen(process.env.PORT,()=>{
    console.log("Server running ");
})