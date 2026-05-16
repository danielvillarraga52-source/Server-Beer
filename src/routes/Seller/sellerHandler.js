
const askAllSellers=async(req,res)=>{
    try {
        const allSeller=await getAllSeller();
        res.status(200).json(allSeller);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};
const askSeller=(req,res)=>{

};
const registerSeller=(req,res)=>{

};
const sellerEdit=(req,res)=>{

};
const deleteSeller=(req,res)=>{

};



module.exports={
askAllSellers,
askSeller,
registerSeller,
sellerEdit,
deleteSeller



};