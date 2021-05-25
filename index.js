const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// control de urls que acceden a nuestra API
const corsOptions = {
  origin: ["http://localhost:4000", "http://localhost"],
  // origin: ["https://www.midominio.com.ar", "https://admin.midominio.com.ar"],
};

app.use(express.json()); // anteriormente BODYPARSER...
app.use(cors(corsOptions));

// MOTOR DB
const db = require("./models/index");

             //    {alter:true} 
db.sequelize.sync(             ).then((result) => {
    console.log("DB sincronizada OK!");
  })
  .catch((err) => {
    console.log("ERROR DB al sincronizar");
  });

// RUTAS
const UsuarioRoutes = require("./routes/usuario.routes");
const RolRoutes = require("./routes/rol.routes");
const estadoPedidoRoutes = require("./routes/estadoPedido.routes");
const productoRoutes = require("./routes/producto.routes");
const detallePedidoRoutes = require("./routes/detallePedido.routes");
const pedidoRoutes = require("./routes/pedido.routes");

app.use('/usuario', UsuarioRoutes);
app.use('/rol', RolRoutes);
app.use('/estadoPedido', estadoPedidoRoutes);
app.use('/producto', productoRoutes);
app.use('/detallePedido', detallePedidoRoutes);
app.use('/pedido', pedidoRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("API en puerto:", PORT);
});
