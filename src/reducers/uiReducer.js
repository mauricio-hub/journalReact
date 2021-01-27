import {types} from '../types/types'


/*ui reducer para el manejo de acciones de 
loading y mostrar mensajes de errores al
usuario cuando se logea
(ui reducer sera sincrono)
*/

const initialState = {
	loading:false,
	msgError:null




}


export const uiReducer = (state = initialState,action) =>{

	switch (action.type) {
		case types.uiSetError:
			return {
				...state,
				msgError:action.payload
			}
			

			case types.uiRemoveError:
			return {
				...state,
				msgError:null
			}
			


		case types.uiStartLoading:
		return {
			...state,
			loading:true
		}
		
		case types.uiFinishLoading:
		return {
			...state,
			loading:false
		}
		


		default:
			
			return state;
	}

} 