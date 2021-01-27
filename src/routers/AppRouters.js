import React ,{useEffect,useState} from 'react';
//1- importar Router,Switch,Route 
import {BrowserRouter as Router,Switch,Redirect} from 'react-router-dom';
//2-importar los archivos a los para establecer las rutas 
import {useDispatch} from 'react-redux';
import {AuthRouter} from './AuthRouter';
import {JournalScreen} from '../components/juornal/JournalScreen';
import {firebase} from '../firebase/firebase-config';
import {login} from '../actions/auth'
import {PrivateRoute} from './PrivateRoute'
import {PublicRoute} from './PublicRoute'
import { startLoadingNotes} from '../actions/notes'
//3-definir rutas dentro del switch
export const AppRouter = () => {

	

	const dispatch = useDispatch();
	//permite saber  que se tiene respuesta de firebase
	//si un usario esta o en la base de datos
	//mientras cheking es true no se muestra nada de la app
	//solo el login y register
	const [checking, setChecking] = useState(true)

	//chequeamos si esta logeado o si no esta logeado
	//se mantiene falso si no esta logeado
	const [isLoggedIn,setIsLoggedIn] = useState(false)

	/* esta fucion useEffect se ejecuta cada 
	vez que el estado de la autenticacion 
	cuando obtenemos el uid o logout etc..
	ademas mantiene la informacion sin perder el 
	estado al recargar la pagina
	*/

	useEffect(() => {
		firebase.auth().onAuthStateChanged(async(user)=>{
 			//console.log(user)
 			//user? = si el objeto user tiene al entoces pregunta el uid
 			// si es null entoces sale 
 			if (user?.uid) {
 				//diparamos la accion del login
 				//login recibe el uid userDiplayname como argumentos
 				dispatch(login(user.uid,user.displayName))
 				//si entra usuario
 				setIsLoggedIn(true)

 				//cargando las notas del usuario
 				//para almacenarlo en el store
 			
 				dispatch(startLoadingNotes(user.uid))

 			}else{
 				setIsLoggedIn(false)
 			}

 			//set cheking sabremos que ya firebase envio una respuesta
 			setChecking(false);
		})
	},[dispatch,setChecking,setIsLoggedIn])


if (checking) {

	return(
		<h1>Wait...</h1>

		)
	
}



	return (
		  <Router>
		  	<div>
		  		<Switch>
		  		<PublicRoute
		  		isAuthenticated = {isLoggedIn}
		  		path="/auth"
		  		component={AuthRouter}/>
		  		
		  		<PrivateRoute
		  		exact
		  		isAuthenticated = {isLoggedIn}
		  		path="/"
		  		component={JournalScreen}
		  		
		  		/>

		  		<Redirect to="/auth/login" />
		  	    </Switch>	

		  	</div>
		  	


		  </Router>
	)
}
