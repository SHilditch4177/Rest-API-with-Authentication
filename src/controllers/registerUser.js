const User = require("../db/models/Usermodel");

async function registerUser(req,res) {
    try {
        const user=await User.create(
            {
                FirstName:req.body.FirstName,
                LastName:req.body.LastName,
                Email:req.body.Email,
                Password:req.body.Password
            }
            // This is the main put for thunderclient annd the requests such as the body and email, where it is written in thrunderclient, and this make request is added to the SQL Table, which is connected to the database which is clever cloud   
        );
        console.log(user);
        res.status(200).json({message:`${req.body.FirstName} you're account has been successfully created.`})
    } catch (error) {
        console.log(error);
        res.status(415).json({message:"Database error",error:error})
    }
} 
module.exports=registerUser;

// This input of code that tranferes between the work bench and the database, ensure that they are in the right places, this is the main frame for the other flies that handles the CRUD controls, this is essential
//  Because if this has any errors then the whole code has issues and then nothing would work, must make sure that this works first before even writing any other code, because it is the main link to thunderclient, SQL and the cloud