const {Router}=require("express");
const {askAllSellers,askSeller,registerSeller,sellerEdit,deleteSeller}=require("../Seller/sellerHandler");
const usersHandler=Router();



usersHandler.get("/",askAllSellers);
usersHandler.post("/register",registerSeller);

usersHandler.get("/:id",askSeller);
usersHandler.put("/editSellerr/:id",sellerEdit);
usersHandler.delete("/deleteSeller/:id",deleteSeller);


module.exports=usersHandler;