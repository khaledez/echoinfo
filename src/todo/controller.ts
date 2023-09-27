import express from "express";

const router = express.Router();

router.route("/").get(function (req, res) {
  res.send("Hello, From a deployed version");
});

export default router;
