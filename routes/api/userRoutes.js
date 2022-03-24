// /api/users

// GET all users

// GET a single user by its _id and populated thought and friend data

// POST a new user:

// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
// PUT to update a user by its _id

// DELETE to remove user by its _id

const router = require("express").Router();
const {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser);

// get, update and delte user by id
router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser);

//add and delete friend
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
