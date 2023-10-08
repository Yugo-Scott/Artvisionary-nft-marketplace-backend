const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.route("/nonce").post(authController.getNonce);
router.route("/verify").post(authController.verify);


module.exports = router;
