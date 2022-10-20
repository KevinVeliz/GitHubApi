const express = require("express");
const app = express();

/* Asignación del puerto */
const port = 3000
/* Importación de los respectivos endpoints */
const userRoutes = require("./routes/Users");

/* Middleware que analizar el cuerpo de la solicitud y la presenta en forma de JSON*/
app.use(express.json());

/* Indicar a la aplicación la ruta a utilizar cuando se realize el llamado a la API */
app.use("/users", userRoutes);

/* Aplicación ejecutada en el puerto asignado anteriormente */
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})