const express = require("express");
const bodyParser = require("body-parser");
const db = require("./database/models");

// Routes
const adminBroRoute = require("./routes/adminbro");
const mainRoutes = require("./routes");
const cakeRoutes = require("./routes/cakes");

const app = express();

app.use(bodyParser.json());

app.use("/admin", adminBroRoute);
app.use("/cakes", cakeRoutes);
app.use(mainRoutes);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  res.status(404);
  res.json({
    error: {
      message: err.message,
    },
  });
});

const PORT = process.env.PORT || 8000;

const run = async () => {
  await db.sequelize.sync();
  console.log("Connection to the database successful!");
  await app.listen(PORT, () => console.log(`App is listening on port 8000!`));
};

run();
