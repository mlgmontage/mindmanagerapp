const express = require("express");
const app = express();
const volleyball = require("volleyball");
const PORT = process.env.PORT || 8080;
require("dotenv").config();

app.use(express.json());
app.use(volleyball);

app.use("/api/topics", require("./api/routes/topics"));

app.listen(PORT, () =>
  console.log(`Server listenning on http://localhost:${PORT}/`)
);
