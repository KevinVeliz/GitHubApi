# GitHubApi
En este repositorio se realiza una prueba de conocimiento utilizando la API de GitHub y crear una API con sus respectivos endpoints.

Esta prueba cuenta con dos componentes los cuales son:

  ### FRONTEND
  Este componente tiene como objetivo utilizar la API de GitHub y mostrar mi usuario y los respositorios existentes dentro del mismo.
  
  Previsualización del resultado final:
  
  <img src="https://user-images.githubusercontent.com/65980001/196883291-6b2c13e1-aade-4182-92b9-8ba1ae42959d.png" width=500px>

  Dentro de este componente de utilizo React.js

  ### BACKEND
  Este componente tiene como objetivo crear una API con sus respectivos endpoints
  - Los endpoints correspondientes son:
  ```
  GET /user/:id
  GET /users?position=<POSITION>
  ```
  
  Previsualización del resultado final para los respectivos endpoints:
  
  <img src="https://user-images.githubusercontent.com/65980001/196886848-153ec950-f6bd-4f59-9d63-b8635a8a094a.png" width=800px>
  <img src="https://user-images.githubusercontent.com/65980001/196887146-ce479486-9cca-482b-83e8-8e78239bdf5d.png" width=800px>

  Dentro de este componente se utilizo Node.js para la creación de la API


## INSTALACIÓN DE LOS RESPECTIVOS COMPONENTES

- Para comenzar con la instalación de los componentes se clonara el repositorio con el siguiente comando
  ```
  git clone https://github.com/KevinVeliz/GitHubApi.git
  ```
- Luego dentro de una terminal de procederá a ir al respositorio anteriormente clonado y ejecutar el siguiente comando
  ```
  code .
  ```
  Este comando nos permitira abrir el proyecto dentro de Visual Studio Code
  
  ### FRONTEND
- Una vez dentro de Visual Studio Code, abriremos una terminal y nos diriguimos a la carpeta que dice frontend y ejecutaremos el siguiente comando
  ```
  npm i 
  ```
  El cual procederá a instalar todas las dependencias necesarias para correr el código
  
- Una vez las dependencias se hayan instalado, se procederá a ejecutar el siguinete comando
  ```
  npm start
  ```
  Y el programa correra en la siguiente dirreción: localhost:3000
  
  ### BACKEND
- Dentro del mismo Visual Studio Code, abriremos una nueva terminal y cambiaremos la ruta a la carpeta denominada backend y ejecutaremos los siguientes comandos
  ```
  npm i 
  ```
  Con este comando debería bastar, para que se instalen todas las dependencias necesarias
  
- Luego se procederá a ejecuar el siguiente comando
  ```
  npm start
  ```
  Y el programa se procedera a ejecutar en la siguiente dirección: localhost:4000
  En caso de que quiera cambiar el puerto lo podrá hacer. Para lo cual tendrá que irse al archivo denominado ```index.js``` dentro del backend 
  y cambiar el puerto donde se presenta el mismo.
