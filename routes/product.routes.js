const express = require("express");
const {
  create,
  read,
  readOne,
  update,
  deleteOne,
} = require("../helpers/helper");
const router = express.Router();
const Product = require("../models/Product");
const Category = require("../models/Category");

router.get("/", async (req, res) => {
  let totalItems = await Product.count();
  return res.status(200).json({
    data: await read(req, Product),
    pagination: {
      currentPage: +req.query.skip,
      totalItems,
      totalPages: Math.ceil(totalItems / +req.query.limit),
    },
  });
});

router.get("/:id", async (req, res) => {
  return res.status(200).json({ data: await readOne(req, Product) });
});

router.get("/category/:categoryId", async (req, res) => {
  return res.status(200).json({ data: await read(req, Product) });
});

router.post("/", async (req, res) => {
  // get the categoryId from the req.body obj
  const { categoryId } = req.body;
  // fetch the name of the category based on id
  const doc = await Category.findById(categoryId, "name");
  // add the name in the req.body obj

  req.body.category = doc?.name || "";

  // create new product based on new req.body object
  return res.status(201).json({ product: await create(req, Product) });
});

router.put("/:id", async (req, res) => {
  if (req.body.hasOwnProperty("categoryId")) {
    // get the categoryId from the req.body obj
    const { categoryId } = req.body;
    // fetch the name of the category based on id
    const doc = await Category.findById(categoryId, "name");
    // add the name in the req.body obj

    req.body.category = doc?.name || "";
  }

  return res.status(200).json({ old_record: await update(req, Product) });
});

router.delete("/:id", async (req, res) => {
  return res.status(200).json({ deleted: await deleteOne(req, Product) });
});

module.exports = router;
