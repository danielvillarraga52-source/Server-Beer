const {Customer}=require("../../db");

const askCustomers=async()=>{
return await Customer.findAll();
};
const askOneCustomer=async({id})=>{
    const client=await Customer.findByPk(id);
    if(!client){
        throw Error("no existe este cliente");
    }
    return client;
};

const createCustomer=async({accumulatedPoints})=>{
    const newCustomer=await Customer.create({
        accumulatedPoints
    });
    return newCustomer;

};
const changueCustomer=async({id,accumulatedPoints})=>{
    const customer=await Customer.findByPk(id);
     if(!customer){
        throw Error("no existe este cliente");
    }
    return await customer.update({accumulatedPoints});
};
const blockedCustomer=async({id})=>{
     const customer=await Customer.findByPk(id);
     if(!customer){
        throw Error("no existe este cliente");
    }const aux={...customer};
    await customer.destroy();
    return aux;


};


module.exports={
askCustomers,
askOneCustomer,
createCustomer,
changueCustomer, 
blockedCustomer 
}