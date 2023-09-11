import express from "express";

const router = express.Router();

router.route("/").get(function (req, res) {
  res.send("Hello, again");
});

export default router;

export function sum(a: number, b: number) {
  return a + b;
}
