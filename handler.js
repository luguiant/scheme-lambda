const express = require("express");
const { json, urlencoded} = require("body-parser");
const currencyRoute = require("./routes/currency.route");
const serverless = require("serverless-http");
const app = express();

app.use(json());
//  no permitira objetos anidados
app.use(urlencoded({ extended: true }));

app.use('/currency',currencyRoute);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

module.exports.currencyLambda = serverless(app);