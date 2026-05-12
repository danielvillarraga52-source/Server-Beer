const {Router}=require("express");
const {askAllCustomers,askCustomer,registerCustomer,customerEdit,deleteCustomer}=require("../Customer/customerHandler");
const usersHandler=Router();



usersHandler.get("/",askAllCustomers);
usersHandler.post("/register",registerCustomer);

usersHandler.get("/:id",askCustomer);
usersHandler.put("/editCustomer/:id",customerEdit);
usersHandler.delete("/deleteCustomer/:id",deleteCustomer);


module.exports=usersHandler;

