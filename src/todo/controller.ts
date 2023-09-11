import express from "express";

const router = express.Router();

router.route("/").get(function (req, res) {
  res.send("Hello, again");
});

export default router;
