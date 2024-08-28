const User = require("../db/models/Usermodel");
const bcrypt=require("bcrypt");

async function changePassword(req,res) {
    try {
        salt_Rounds=parseInt(process.env.SALT_ROUNDS)
        const hashedNewPassword=await bcrypt.hash(req.body.newPassword,salt_Rounds);
        // this is the comand to bcrypt the new password
        console.log(hashedNewPassword)

        const result=await User.update({Password: hashedNewPassword},{where:{Email:req.body.Email}})
        // though this is when the new password is updated
        console.log(result);
        res.status(200).json({message:"password updated",results:result})
        // this where thunderclient tells you when it is successful
    } catch (error) {
       console.log(error);
       res.status(200).json({message:"password couldn't be updated",errorMessage:error})     
    }
}
module.exports=changePassword;