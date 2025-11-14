const { app, mongoose } = require("./app");  // IMPORT CORRECTO

const mongoURL =
  process.env.MONGO_URL ||
  "mongodb://root:example@mongo:27017/test?authSource=admin";

async function start() {
  try {
    await mongoose.connect(mongoURL);
    console.log("Mongo conectado");

    app.listen(3000, () => console.log("Servidor en puerto 3000"));
  } catch (err) {
    console.error("Error al iniciar:", err);
  }
}

start();
