const {DataTypes}=require("sequelize");

module.exports=((sequelize)=>{
    sequelize.define("Seller",{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4
        },
        online:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        }
    })
})

