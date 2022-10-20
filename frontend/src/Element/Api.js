import { useEffect, useState } from "react";

/*
 - Función para consumir la API de GITHUB, utilizando Fetch, estableciendo
 - los datos del objeto desl estado y devolviendo el objeto del estado.
 - Esta función devolverá el avatar, nombre y descripción del usuario
 - de GitHub.
*/
export const GithubUser = () => {
    const [userAvatar, setUserAvatar] = useState({data:null})

    /* Renderizado de la aplicación al comenzar el proyecto */
    useEffect(()=>{
        getUser()
    },[])

    const getUser = () => {
        fetch('https://api.github.com/users/KevinVeliz')
        .then(response => response.json())
        .then(data => setUserAvatar(data))
    }
        
    return userAvatar;
}

/*
 - Función para consumir la API de GITHUB, utilizando Fetch, estableciendo
 - los datos del objeto desl estado y devolviendo el objeto del estado.
 - Esta función devolverá los repositorios del usuario de GitHub.
*/

export const GithubUserRepos = () => {
    const [user, setUser] = useState([])

    /* Renderizado de la aplicación al comenzar el proyecto */
    useEffect(()=>{
        getUser()
    },[])

    const getUser = () => {
        fetch('https://api.github.com/users/KevinVeliz/repos')
        .then(response => response.json())
        .then(data => setUser(data))
    }
        
    return user;
}