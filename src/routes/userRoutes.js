const { Router } = require("express");
const registerUser = require("../controllers/registerUser");
const hashPassword = require("../middleware/hashedPassword");
const ListUsers = require("../controllers/listUsers"); 
const PasswordCheck = require("../middleware/checkpassword");
const DeleteUser = require("../controllers/deleteUser");
const changePassword = require("../controllers/changePassword");
const Login = require("../controllers/login");
const checktoken = require("../middleware/checkToken");
// these are the the import of the other files so i can be process through and turn into the right routes for the server this is important to ensure there a stable exports and if something went wrong we know which one it was and go back to the file, if the export wasn't working properly


const userRoutes=Router();
// this makes sure that the express router is the userRoutes that we are going to use in thunderclient to make sure that the group connections are working as intetened

// the token is like the access code that allows you to check and malipuate the database though cs code
userRoutes.post("/Account/Register",hashPassword,registerUser);
// this is the Create route,("is the part to allows the right file to be loaded, though thunderclient, or the website itself") using registers and hashpassword fuctions to create an account 
userRoutes.get("/Account/ListAccounts",checktoken,ListUsers);
// this is the Read route
userRoutes.put("/Account/UpdatePassword",checktoken,changePassword);
// this is the Update route 
userRoutes.delete("/Account/DeleteAccount",checktoken,DeleteUser);
//this is the Delete route
userRoutes.post("/Account/Login",PasswordCheck,Login);
// this is the Login route, using post this allows to enter the login details  
module.exports=userRoutes;