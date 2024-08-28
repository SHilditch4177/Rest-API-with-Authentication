const jwt=require("jsonwebtoken")

async function Login(req,res) {
    try{
        const exprationTime=60*60*27*7;
        // this shows the expration time for the token
        const options={expiresIn:exprationTime}
        const payload={Email:req.body.Email}
        // this containes the statement of the user, and any additonal enity attributes, and this is retrieved from the email as shown above
        const pritvateKey=process.env.JWT_KEY;
        console.log(pritvateKey);
        // this is where the private key (the private key is the jsontoken)is stored in the env and shows where to find it
        const token=jwt.sign(payload,pritvateKey,options);
        // this is the main fuction that put it all together that make the main token for you to use
        console.log(token)
        res.status(200).json({message:"JWT token created",token:token,Email:req.body.Email})
        // this tells when the function was successful
    }catch(error){
        console.log();
        res.status(500).json({message:"Login Error",errorMessage:error})
        // this chatches the function and says when it was unsucussful
    }
};
module.exports=Login;

// this login function creates a key, and gives it a expration date in order to login and when it fails it will give you an error