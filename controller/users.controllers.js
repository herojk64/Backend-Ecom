const addUser =async(req,res)=>{
    const newUser = {
        name:req.body.username,
        email:req.body.email,
        username:req.body.username,
        password:saltPassword,
        dob:req.body.dob
    }
    res.status(400).json(newUser);
}
module.addUser = addUser;