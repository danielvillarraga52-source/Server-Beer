const {DataTypes}=require("sequelize");

module.exports=((sequelize)=>{
    sequelize.define("Customer",{
        id:{
            type: DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4
        },
        accumulatedPoints:{
            type:DataTypes.INTEGER,
            allowNull:true
        }
    })
})