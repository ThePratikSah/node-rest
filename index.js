const express = require("express");
const conn = require("./utils/db");
const {
  categoriesRoutes,
  couponsRoutes,
  ordersRoutes,
  userRoutes,
  productsRoutes,
} = require("./routes");
const { PORT } = require("./utils/constants");
const cors = require("cors")({ origin: true });

const app = express();

app.use(express.json());
app.use(cors);

app.use("/categories", categoriesRoutes);
app.use("/products", productsRoutes);
app.use("/users", userRoutes);
app.use("/orders", ordersRoutes);
app.use("/coupons", couponsRoutes);

app.use((err, req, res) => {
  res.status(err.status);
  res.json({ msg: err.message });
});

conn
  .then(() => {
    app.listen(PORT, () => console.log(`Connected and Running on ${PORT}`));
  })
  .catch((e) => console.log(e.message));
