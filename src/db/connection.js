const {sequelize, Sequelize}=require("sequelize");
const SQLconnection=new Sequelize(process.env.MYSQL_URI)
// this the where the new connection is set up between the sql workbench and vscode so that the sructure of the table is made and can be tranfered over to the workbench 

// this is the main format to use so that it catches any error and cause the server to crash it is essental to use, 
try {
    SQLconnection.authenticate();
    // this to authenicate the connection
    console.log("successfully connected to the database")
    // console log is going to be your best friend so you can acknolowledge that the connection was made and you are not lost in the woods
    
} catch (error) {
    console.log(error);
    //  the catch error is the main part as for try is mainly the fuctions and the catch is that you can see the mistake and where it is made
}
module.exports=SQLconnection;