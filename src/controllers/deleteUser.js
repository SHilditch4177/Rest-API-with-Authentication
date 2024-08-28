const User = require("../db/models/Usermodel");

async function DeleteUser(req,res) {
    try {
        const result=await User.destroy({where:{Email: req.body.Email}})
        // this is used to delete the account and where it is, using the .destroy it shows throught thunderclient that it has or hasn't been deleted
        console.log(result);
        res.status(200).send(`User ${req.body.Email} has been deleted`);
        // this shows through thunderclient it has been sucessful 
    } catch (error) {
        console.log();
        res.status(500).json({message:"your account has failed to be deleted",errorMessage:error})
    }
    
}
module.exports=DeleteUser;
// this async function is used to delete an account off the database and inturn showing ifthere is any errors or mishaps when it comes to running the function