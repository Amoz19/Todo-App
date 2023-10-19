const { Router } = require("express");
const { createUser } = require("../controller/userController");

const router = Router();

router.post("/", createUser);

module.exports = router;
