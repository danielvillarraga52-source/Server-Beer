const {Router}=require("express");
const usersRoutes=require("./Users/usersRoutes")
const mainRouter=Router();

mainRouter.use("/users",usersRoutes);



module.exports=mainRouter;