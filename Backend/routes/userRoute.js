const express = require("express");
const {
  updateProfile,
  getAllUsers,
  getSingleUser,
  getUserDetails,
  deleteUser,
} = require("../controllers/UserController/userController");

const { registerUser,
  loginUser,
  logoutUser}=require("../controllers/UserController/authenController")

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/isAuth");

const router = express.Router();



router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").get(logoutUser);

router.route("/me").get(getUserDetails);

router.route("/me/update").put(updateProfile);

router.route("/admin/allusers").get(getAllUsers);

router.route("/admin/delete/:id").delete(deleteUser);

router.route("/admin/user/:id").get(getSingleUser);

module.exports = router;
