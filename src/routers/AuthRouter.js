import React from 'react'
//1- importar Router,Switch
import {Switch,Route,Redirect} from 'react-router-dom';
//2-importar los componentes para establecer las rutas
import {LoginScreen} from '../components/auth/LoginScreen'
import {RegisterScreen } from '../components/auth/RegisterScreen'
export const AuthRouter = () => {
	return (
		<div className="auth__main">
			
			<div className="auth__box-container">


			<Switch>
			<Route
			exact	
			path="/auth/login"	
			component={LoginScreen}
			/>
	
			<Route
			exact
			path="/auth/register"
			component={RegisterScreen}
			/>

			<Redirect to="/auth/login"/>

			</Switch>



			</div>

		</div>
		
		
	)
}


