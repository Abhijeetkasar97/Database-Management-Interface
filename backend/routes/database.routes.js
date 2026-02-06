// routes/database.routes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/database.controller");
const validateDbName = require("../middlewares/validateDbName.middleware");

router.post("/create", validateDbName, controller.createDatabase);
router.post("/check", validateDbName, controller.checkDatabase);
router.post("/migrate", controller.migrateDatabase);

module.exports = router;
