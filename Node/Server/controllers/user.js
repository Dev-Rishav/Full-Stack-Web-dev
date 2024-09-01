const User=require("../models/user")

async function handleGetAllUsers(req, res) {
  const allDBUsers = await User.find({});
  return res.json(allDBUsers);
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id); 
  if (!user) return res.status(404).json({ user: "Not Found" });
  return res.json(user);
}

async function handleUpdateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, req.body);
  return res.status(200).json({ status: "Success" });
}

async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json(200).json({ status: "success" });
}

async function handleCreateUser(req,res) {
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title)
        return res.status(400).json({field:"missing"});

    const result= await User.create({    //? this creates this user and return that object
        firstName: body.first_name,
        lastName: body.last_name,
        gender:body.gender,
        email:body.email,
        jobTitle:body.job_title,
    });
    return res.status(201).json({msg:"success"});
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUser,
};
