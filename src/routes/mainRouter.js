const {Router}=require("express");
const usersRoutes=require("./Users/usersRoutes");
const customersRoutes=require("./Customer/customerRouter");
const sellerRoutes=require("./Seller/sellerRouter");
const mainRouter=Router();

mainRouter.use("/users",usersRoutes);
mainRouter.use("/customers",customersRoutes);
mainRouter.use("/seller",sellerRoutes);



module.exports=mainRouter;