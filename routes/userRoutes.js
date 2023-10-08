const express = require("express");
const userController = require("../controllers/UserController"); 
const authController = require("../controllers/authController");


const router = express.Router();

router.post(
  "/register",
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.register
);

router.route("/likes").get(authController.protect, userController.getOneUser);
router.route("/:id/profile").get(userController.getUser);

module.exports = router;