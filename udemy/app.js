const path = require("path");

const express = require("express");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRouter = require("./routes/shop");

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

app.use("/admin", adminRoutes);
app.use(shopRouter);

app.use((req, res, next) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "views", "page-not-found.html"));
});

app.listen(3000, () => {
  console.log("Server started at 3000 port");
});
