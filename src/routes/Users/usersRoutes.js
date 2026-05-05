const {Router}=require("express");
const {registerUser,askUsers}=require("./usersHandler")
const usersHandler=Router();

usersHandler.get("/",askUsers);
usersHandler.post("/register",registerUser);




module.exports=usersHandler;