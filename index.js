const express = require("express");
const categoriesRoutes = require("./routes/category.routes");
const productsRoutes = require("./routes/product.routes");
const usersRoutes = require("./routes/user.routes");
const orderRoutes = require("./routes/orders.routes");
const couponRoutes = require("./routes/coupons.routes");
const cors = require("cors")({ origin: true });
const functions = require("firebase-functions");
const conn = require("./utils/db");

const app = express();

app.use(express.json());
app.use(cors);

app.use("/categories", categoriesRoutes);
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
app.use("/orders", orderRoutes);
app.use("/coupons", couponRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Thanks for your visit",
  });
});

// app.listen(3001, () => console.log(`Connected and Running on ${3001}`));

// serverless code
exports.app = functions.region("asia-east2").https.onRequest(app);
