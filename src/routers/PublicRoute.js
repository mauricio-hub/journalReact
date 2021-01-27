import React from 'react'
import PropTypes from 'prop-types'
import {Route,Redirect } from 'react-router-dom'




export const PublicRoute = ({
	//se recibe los props isAuthenticated para validar
isAuthenticated,
//el componente que se 
//quiere renderizar pero se renombra a mayuscula 
component:Component,
//...rest sera el resto de los componentes como exact path etc 
...rest

}) => {
//retorna una ruta 
	return (
	//retorna el rest}
		<Route {...rest}
		//se valida el componente con sus props history location etc
		component={(props)=>(
			//si esta autenticado}
			(isAuthenticated)
			//entoces muestra el componente}
			?( <Redirect to="/" />) 
			//si no redirige al Dashboard
			:( <Component {...props} />)

			)}
		/>
			
	
	)
}

//elementos requeridos
PublicRoute.propTypes = {
isAuthenticated:PropTypes.bool.isRequired,
component:PropTypes.func.isRequired

}

