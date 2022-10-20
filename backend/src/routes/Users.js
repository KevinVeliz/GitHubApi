const express = require("express");
const data = require("../../users.json");
const router = express.Router();


/* Ruta utilizada para obtener los datos de un usuario en específico */
router.get("/:id", (req, res) => {

  /* Leer el parametro con el data */
  const dataUsers = data[req.params.id];

  /* Utilización de un try catch, para detección de errores inesperados */
  try{

    /* 
    Comprobamos si los son existentes con nuestro parámetro dataUsers
    Por lo cual si está vació enviaremos un error 404
    Caso contrario enviaremos los datos del usuario en cuestión por pantalla
    */

    if (!dataUsers){
        res.status(404).send("Page No Found");
    }else{
        res.send(dataUsers);
    }
  }catch(e){
    res.send("Error inesperado")
  }

});



/* 
Función que recibe una solicitud y una respuesta, en la cual se filtrarán los datos del archivo users.json
En este caso se utilizará el parámetro /:? para la búsquedad de la posición de un usuario 
*/

router.get("/:?", (req, res) => {

    /* Convertir el archivo JSON en un Arreglo de Objetos para poder iterar sobre ellos */
    const dataArray = Object.values(data);

    /* Obtención de la cadena de consulta de la URL */
    const filtersPosition = req.query;

    /* Función para filtrar datos con el Arreglo de Objetos anteriormente creado */
    const filteredUsersPosition = dataArray.filter((user) => {

        let validValue = true;
        /* Iteramos sobre las claves del objeto y compramos los valores del mismo con los valores de la cadena de consulta */
        for (key in filtersPosition) {
        /* Comparamos los valores de la clave del objeto con el valor a buscar */
        validValue = validValue && user[key] == filtersPosition[key];
        }
        return validValue;
    });
    
    /* 
    Enviamos los datos encontrados con un valor true
    Y en caso de no encontrar el valor, se retornará un arreglo vacio
    */
    res.send(filteredUsersPosition);
});


module.exports = router;
