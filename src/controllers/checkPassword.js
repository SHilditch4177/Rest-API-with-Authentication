const bcrypt=require("bcrypt");


const hashedPassword="";
const TextPassword="";
async function checkPassword() {
    const result=await bcrypt.compare(TextPassword,hashedPassword);
    console.log(result);
    
}
checkPassword();
// this simple function shows through the terminal wether the password is correct or not it is to compare the bycrpt code and the text password and it shows the results through the console log just to check whether you have the right one