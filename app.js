const express = require('express');
const db = require('./src/models');
require('./src/controller/associations');
const routes = require('./src/routes/routes');
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({limit: "50mb", parameterLimit: 500000000 }));

app.use('/CanYouGo', routes.routesCuenta);
app.use('/CanYouGo', routes.routesCliente);
app.use('/CanYouGo', routes.routesNegocio)
app.use('/CanYouGo', routes.routesDueño);
app.use('/CanYouGo', routes.routesAuth);
app.use('/CanYouGo', routes.routesFiles);
app.use('/CanYouGo', routes.routesEmailer);
app.use('/CanYouGo', routes.routesSucursal);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('listening on: http://localhost:4000');
    }); 
});
