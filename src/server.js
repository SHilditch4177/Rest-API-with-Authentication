require("dotenv").config();
const express=require("express");
const SQLconnection = require("./db/connection");
const User = require("./db/models/Usermodel");
const userRoutes = require("./routes/userRoutes");
const cors=require("cors");


const app=express();
// this changes expres to app so it allows us to use it better when it comes to other documents
app.use(express.json());
app.use(cors());
const port=process.env.PORT||5002;
// this make sure we use the right port/set the port through the connection .env
app.get("/health",(req,res)=>res.status(200).send("API is healthy"));
// this helps get the status of the server, and tells us if every is working
app.use(userRoutes);
// this is the directory to use the userroutes in the routes folder, and allows the server to make a connection between the rest of the files
User.sync({alter:true});
// this allows it to sync the database and the server
app.listen(port,()=>console.log(`Server is listening in on port ${port}`));
// this makes the connection between thunderclient and the server code and through the termal it tells us whether it is working properly or not  