const express = require("express");
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUser,
} = require("../controllers/user");

//* here we are gonna put our all routes made for user
//? One of the problem we are gonna face is, we dont have app object of express cause we have defined that on index.js file...
//* So express provide us with another object called router which acts like an isolated router and gets the job done. We only need to use the router on each place where app have been used.

//* GOOD practice: As we can see that all the routes are on users, so if we can handle the condition that if user route is accessed then this script will be executed from the index.js

//? All these get,patch,post.. are said to be controllers in MVC architecture. So we need to refcator this code again to maintain MVC.

//creating router
const router = express.Router();

//Rest API
// router.get('/', async(req, res) => {
//     const allDBUsers= await User.find({});  //* returns all the objects that are present on  User collection
//     const html = `
//     <ul>
//         ${allDBUsers.map((user) => `<li>${user.firstName}</li>`).join("")}
//     </ul>`;
//     return res.send(html);
// });

// router.get('/',handleGetAllUsers);  //?this and post are on same route so lets group them

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

router.route("/").get(handleGetAllUsers).post(handleCreateUser);

// router.post('/', handleCreateUser);

module.exports = router;
