const {createUser,askAllUsers,askByName,askOneUser,changeUser,userBlocked}=require("./usersController");


const askUsers = async(req,res)=>{
    const {name}=req.query;
    try {
        if(name){
        const getByName = await askByName({name});
        res.status(200).json(getByName);
        }else{
        const getAllUsers = await askAllUsers();
        res.status(200).json(getAllUsers);
        }
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

const registerUser=async(req,res)=>{
    const {name,middleName,lastName,middleLastName,mail,address,role,password}=req.body;
   try {
     const newUser= await createUser({name,middleName,lastName,middleLastName,mail,address,role,password});
     res.status(200).json(newUser);
   } catch (error) {
    res.status(400).json({error:error.message});
   }
};
const askUser=async(req,res)=>{
    const {id}=req.params;
    try {
        const getById = await askOneUser({id});
        res.status(200).json(getById);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

const editUser=async(req,res)=>{
    const {id}=req.params;
    const {mail,address,password}=req.body;
    try {
        const changeAttributes=await changeUser({id,mail,address,password});
        res.status(200).json(changeAttributes);
    } catch (error) {
        res.status(200).json({error:error.message});
    }
}
const deleteUser=async(req,res)=>{
    const {id}=req.params;
    try {
        const userno=await userBlocked({id});
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports={
    registerUser,
    askUsers,
    askUser,
    editUser,
    deleteUser
}