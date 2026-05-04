const {Router}=require("express");
const {registerUser}=require("./usersHandler")
const usersHandler=Router();

usersHandler.post("/register",registerUser);




module.exports=usersHandler;