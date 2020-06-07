const express = require("express");
const router = express.Router();

/* GET admin page. */
router.get("/", function (req, res, next) {
  res.render("dashboard", { title: "Express" });
});

module.exports = router;
