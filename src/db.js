const {Sequelize}=require("sequelize");
const userModel=require("./models/User");
const customerModel=require("./models/Customer");
const sellerModel=require("./models/Seller");

require('dotenv').config()
const {DB_USER,DB_SERVER,DB_PASSWORD,DB_PORT,DB_NAME}=process.env;



const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_SERVER}:${DB_PORT}/${DB_NAME}`,{logging:false});
userModel(sequelize);
customerModel(sequelize);
sellerModel(sequelize)
const {User,Customer,Seller}=sequelize.models;

module.exports={
    ...sequelize.models,
    conn:sequelize

}