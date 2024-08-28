const bcrypt=require("bcrypt");
const User = require("../db/models/Usermodel");
const { where } = require("sequelize");

const PasswordCheck=async (req,res,next) => {
    try {
        const TextPassword=req.body.Password;
        // because we go through thunderclient to see the errors and information we need to tell where the information is stored in the body 
        console.log(TextPassword);
        // this is to show the password in plain text ans see it through the terminal

        const UserDetails=await User.findOne({where:{Email:req.body.Email}})
        // this is where the await function to wait and findone account through the email through the thunderclient aswell we are using .json in order to do that we use brackets and curley brackets in the where statement
        console.log(UserDetails)
        // this is to show the user details that is connected to the password

        const hashedPassword=UserDetails.Password
        console.log(hashedPassword);
        // this is display the hashed password

        const check=await bcrypt.compare(TextPassword,hashedPassword);
        console.log(check);
        // this is to compare the bcrypt hashed password and the text password in order to ensure that we have the right account
        if(check===true){
            console.log("line 25");
            next();
            // the next statement is where the code knows to move on it's more like an endpoint than a loop 
        }else{
            res.status(400).send("password incorrect")
            // this is where the error message appear through thunderclient the main error codes ranges 400-500
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"something went wrong",errorMessage:error})
        // this is the main part to a try catch where using .json to show the error and with the res status through thunder client 
    }
}
module.exports=PasswordCheck;





// this is the middleware where the main checks are made through all the important node_modules