const express = require("express");
const db = require("./src/models");
require("./src/controller/associations");
const routes = require("./src/routes/routes");
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb", parameterLimit: 500000000 }));

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// app.use(function (req, res, next) {

//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Max-Age", "*");
//   res.setHeader("Access-Control-Allow-Headers", "content-type");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "PUT, POST, GET, DELETE, PATCH, OPTIONS"
//   );
//   next();
// });

app.use("/CanYouGo", routes.routesCuenta);
app.use("/CanYouGo", routes.routesCliente);
app.use("/CanYouGo", routes.routesNegocio);
app.use("/CanYouGo", routes.routesDueño);
app.use("/CanYouGo", routes.routesAuth);
app.use("/CanYouGo", routes.routesFiles);
app.use("/CanYouGo", routes.routesEmailer);
app.use("/CanYouGo", routes.routesSucursal);



db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("listening on: http://localhost:4000");
  });
});
