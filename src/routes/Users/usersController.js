const {User}=require("../../db");
const jwt=require("jsonwebtoken");
const  bcrypt  =  require ( 'bcrypt' );
const {Op, where} = require("sequelize");




require("dotenv").config();


const askAllUsers=async()=>{
    return await User.findAll();
} 
const askByName=async({name})=>{
    const cleanName = name.trim();
    return await User.findAll({

        where:{
            name:{
                [Op.iLike]:`%${cleanName}%`
            }
        }
    })
}

const createUser=async({name,middleName,lastName,middleLastName,mail,address,role,password})=>{
    if(!name || !lastName || !mail || !password) throw Error("Faltan datos para el registro");

    const saltRounds = await bcrypt.genSalt(10);
    const hashPassword= await bcrypt.hash(password,saltRounds);
    const user = await User.create({
        name,
        middleName,
        lastName,
        middleLastName,
        mail,
        address,
        role,
        password:hashPassword
    });
    const token = jwt.sign ( { mail:user.mail,role:user.role } ,process.env.JWT_SECRET, { expiresIn : '1h' } ) ;
    return token;


};

const askOneUser= async({id})=>{

    const user = await User.findByPk(id);
    if(!user) throw Error("usuario no existe");
    return user;
}
const changeUser=async({id,mail,address,password})=>{
    
    const user = await User.findByPk(id);
    if(!user) throw Error("usuario no existe");
    const edit= await user.update({
        mail,
        address,
        password
    });
    return edit;
}
const userBlocked =async({id})=>{
    const user = await User.findByPk(id);
    if(!user) throw Error("usuario no existe");
    await user.destroy();
    return user;
}

module.exports={
    createUser,
    askAllUsers,
    askByName,
    askOneUser,
    changeUser,
    userBlocked

}