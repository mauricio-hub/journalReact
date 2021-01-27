import React from 'react'
import PropTypes from 'prop-types'
import {Route,Redirect } from 'react-router-dom'




export const PrivateRoute = ({
	//se recibe los props isAuthenticated para validar
isAuthenticated,
//el componente que se 
//quiere renderizar pero se renombra a mayuscula 
component:Component,
//...rest sera el resto de los componentes como exact path etc 
...rest

}) => {


//aqui se guarda en el localstorage la ultima  
//ruta del usuario antes de salir
//localStorage.setItem('lastPath',rest.location.pathname)


//retorna una ruta 
	return (
	//retorna el rest}
		<Route {...rest}
		//se valida el componente con sus props history location etc
		component={(props)=>(
			//si esta autenticado}
			(isAuthenticated)
			//entoces muestra el componente}
			? (<Component {...props}/>)
			//si no redirige al login
			:(<Redirect to="auth/login"/>)

			)}
		/>
			
	
	)
}

//elementos requeridos
PrivateRoute.propTypes = {
isAuthenticated:PropTypes.bool.isRequired,
component:PropTypes.func.isRequired

}

