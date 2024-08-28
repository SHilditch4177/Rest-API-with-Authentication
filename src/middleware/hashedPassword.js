const bcrypt=require("bcrypt");

const hashPassword=async (req,res,next) => {
    try {
        TextPassword=req.body.Password;
        // this is where the text password is shown in thunderclient
        salt_Rounds=parseInt(process.env.SALT_ROUNDS)
        // this show where the saltrounds are and that parseInt tells the code that it isn't a string aswell as the progress of where to go to retrive the salt rounds 
        const hashedPassword=await bcrypt.hash(TextPassword,salt_Rounds);
        // this is the main part to turn the text password into the bcrypt code
        req.body.Password=hashedPassword
        // and this where it tells thunderclient to show the bcrypt code instead of the text password
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"internal server error",error:error}) 
    }
}
module.exports=hashPassword;