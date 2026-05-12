const {askCustomers,askOneCustomer,createCustomer,changueCustomer, blockedCustomer }=require("./customerController")
const askAllCustomers=async(req,res)=>{
    try {
        const getAllUsers= await askCustomers();
        res.status(200).json(getAllUsers);
    } catch (error) {
        res.status(200).json({error:error.message});
    }
     
};
const askCustomer=async(req,res)=>{
    const {id}=req.params;
    try {
        const getUser= await askOneCustomer({id});
        res.status(200).json(getUser);
    } catch (error) {
        res.status(200).json({error:error.message});
    }
};
const registerCustomer=async(req,res)=>{
    const {accumulatedPoints}=req.body;
     try {
        const postUser= await createCustomer({accumulatedPoints});
        res.status(200).json(postUser);
    } catch (error) {
        res.status(200).json({error:error.message});
    }
};
const customerEdit=async(req,res)=>{
    const {id}=req.params;
    const {accumulatedPoints}=req.body;
     try {
        const editUser= await changueCustomer({id,accumulatedPoints});
        res.status(200).json(editUser);
    } catch (error) {
        res.status(200).json({error:error.message});
    }
};
const deleteCustomer=async(req,res)=>{
    const {id}=req.params;
      try {
        const customerBad= await blockedCustomer({id});
        res.status(200).json(customerBad);
    } catch (error) {
        res.status(200).json({error:error.message});
    }
};



module.exports={
askAllCustomers,
askCustomer,
registerCustomer,
customerEdit,
deleteCustomer



};