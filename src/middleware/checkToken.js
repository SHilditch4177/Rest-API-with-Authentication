const jwt=require("jsonwebtoken")
const User = require("../db/models/Usermodel")


async function checktoken(req,res,next) {
    try {
        const token=req.header("Authorization").replace("Bearer ","");
        // this is to tell thunderclient to display the token and through the header and checkbox it can create a token
        const pritvateKey=process.env.JWT_KEY;
        // this makes the connection with the token key and created token
        const decodedToken=await jwt.verify(token,pritvateKey);
        // this verify the key to ensure you can use and edit the API
        const userEmail=decodedToken.Email;
        const checkUserExsites=await User.findOne({where:{Email:userEmail}});
        // this checks if the user exsites for when the token is made through the email and findOne is ensures that the code is working correctly
        if(checkUserExsites===false){
            throw new Error("user no longer on the database")
        }else{
            req.body.Email=userEmail
            next();
        }
        // the if statement makes sure that there isn#t any errors and that it will throw a new one which will be moved to the try catch
        // else it should go through via the else statement
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"token check failed",errorMessage:error})
        // this is shown in the thunderclient, when the token has failed
    }
}
module.exports=checktoken;