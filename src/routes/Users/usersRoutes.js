const {Router}=require("express");
const {registerUser,askUsers,askUser,editUser,deleteUser}=require("./usersHandler")
const usersHandler=Router();

usersHandler.get("/",askUsers);
usersHandler.post("/register",registerUser);
usersHandler.get("/:id",askUser);
usersHandler.put("/editUser/:id",editUser);
usersHandler.delete("/deleteUser/:id",deleteUser);






module.exports=usersHandler;