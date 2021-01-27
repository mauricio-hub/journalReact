import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import {authReducer} from '../reducers/authReducer';
import {uiReducer} from '../reducers/uiReducer'
//es un middleware thunk permite peticiones asincronas
import thunk from 'redux-thunk';
import {notesReducer} from '../reducers/notesReducers'

//habilita la exrencion del dev tool y ademas de poder aplicar middleware
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


//conbineReducers es una funcion que sirve para
//almacenar todo las funciones reducer que luego pasan al createStore
//con el fin de no refactorizar
//este archivo tambien es conocido como root reducer
const reducers = combineReducers({
	auth:authReducer,
	ui:uiReducer,
	notes:notesReducer
})

//create store recibe un reducer y create store solo recibe un reducer nada mas
export const store =createStore(reducers,
	//configuaracion que permite trabajar acciones asincronas
	composeEnhancers(

		applyMiddleware(thunk)
		)
	);