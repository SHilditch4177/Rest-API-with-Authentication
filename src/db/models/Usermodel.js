const SQLconnection=require("../connection");
const {DataTypes}=require("sequelize");
// this is the main structure for the table is formed through the connection through SQL using the connection through sequelize helps makes a table in the SQL workbench, using booleans in order to malipulate and form the basics which is needed
const User =SQLconnection.define("User",{
    User_ID:{
        type:DataTypes.BIGINT,
        // type is used in order to make sure it is an datatype input and using BIGINT which SQL lingo for big intervals becuase primarily it's intervals and not strings which is majority of the others
        autoIncrement:true,
        // this generate a unique number when i new record is created, or inserted into the table
        primaryKey:true,
        // this is the unique identifier for each row 
        unique:true,
        // this ensure that the id is unquie and cannot be dubicated
        allowNull:false
        // this prevents nulls in the table 
    },
    // this is the structure for one column in the table which will be seen in the SQL workbench with id's you have to add the primary and auto intervals to ensure that each account has a special idenification using booleans is the main form to correctly ensure that it is working
    FirstName:{
        type:DataTypes.STRING,
        // this is the second form for datatypes which standard
        unique:false,
        // usually you would make it true for usernames but alot of people tend to have the same first and last name 
        allowNull:false
    },
    // this is the more commen format for making a string column, and using a comma at the end of everyone ensure that there i cut off point and not a continuation and make it less likely to have errors
    LastName:{
        type:DataTypes.STRING,
        unique:false,
        allowNull:false
    },
    Email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false 
    },
    // because emails are unique anyways using this true booleans make sure that it is the main unique identifier for each account
    Password:{
        type:DataTypes.STRING,
        unique:false
        // this is different to ensure that the user isn't aware that they have another persons password 
    }

})
module.exports=User;
// this is the export of the function so that it can be added to the server and allows to be tranfered between different files as it is the main stucture for the controls



// the model folder is the base format to ensure that the main structure is formed and the connection is made and secure

