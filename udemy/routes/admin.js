const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-products.html"));
});

router.post("/add-product", (req, res, next) => {
  res.send("<h1>User route path</h1>");
});

module.exports = router;
