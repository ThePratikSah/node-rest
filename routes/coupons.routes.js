const express = require("express");
const {
  create,
  read,
  readOne,
  update,
  deleteOne,
  validateCoupon,
} = require("../helpers/helper");
const router = express.Router();
const Coupon = require("../models/Coupons");

// this will get all the coupons
router.get("/", async (req, res) => {
  return res.status(200).json({ data: await read(req, Coupon) });
});

// this will get single coupon
router.get("/:id", async (req, res) => {
  return res.status(200).json({ data: await readOne(req, Coupon) });
});

// this will create new coupon
router.post("/", async (req, res) => {
  return res.status(201).json({ coupon: await create(req, Coupon) });
});

// this will validate a coupon
router.post("/validate-coupon", async (req, res) => {
  const { error, message, amountToPay } = await validateCoupon(req);
  return res.status(error ? 400 : 200).json({ data: message, amountToPay });
});

// updating the coupon
router.put("/:id", async (req, res) => {
  return res.status(200).json({ old_record: await update(req, Coupon) });
});

// deleting the coupon
router.delete("/:id", async (req, res) => {
  return res.status(200).json({ deleted: await deleteOne(req, Coupon) });
});

module.exports = router;
