const User = require("../db/models/Usermodel");

const ListUsers=async (req,res) => {
    try {
        const listOfAllUsers=await User.findAll({});
        // this shows all the list of 
        res.status(200).json({message:"Here is the list of all Accounts currently on the DataBase:",ListUsers:listOfAllUsers})
    } catch (error) {
        console.log(error);
        res.status(500).json({errorMessage:error})
    }
    
}
module.exports=ListUsers;

// this function is to show all that are currently on the database and through thunderclients we can see the users and there details