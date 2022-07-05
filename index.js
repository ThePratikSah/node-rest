const express = require("express");
const conn = require("./utils/db");
const categoriesRoutes = require("./routes/category.routes");
const productsRoutes = require("./routes/product.routes");
const usersRoutes = require("./routes/user.routes");
const orderRoutes = require("./routes/orders.routes");
const couponRoutes = require("./routes/coupons.routes");
const { PORT } = require("./utils/constants");
const cors = require("cors")({ origin: true });

const app = express();

app.use(express.json());
app.use(cors);

app.use("/categories", categoriesRoutes);
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
app.use("/orders", orderRoutes);
app.use("/coupons", couponRoutes);

app.use((err, req, res, next) => {});

conn
  .then(() => {
    app.listen(PORT, () => console.log(`Connected and Running on ${PORT}`));
  })
  .catch((e) => console.log(e.message));
