const {createUser,askAllUsers,askByName}=require("./usersController");


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




module.exports={
    registerUser,
    askUsers
}