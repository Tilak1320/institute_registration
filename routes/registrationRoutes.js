const express = require("express");
const router = express.Router();
const contrller = require("../controllers/registrationController");

router.post("/institute", contrller.registerInstitute);
router.post("/register/school", contrller.registerSchool);
router.post("/register/college", contrller.registerCollege);
router.post("/register/competitive-exam", contrller.registerCompetitiveExam);

module.exports = router;
