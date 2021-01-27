import { types } from '../types/types';

/*Notes reducer
como esrado inicial sera un objeto vacio
y lugo recibe un action  y un objeto del tipo notes

 notes:[],
 active:null,
 active:{
	id:'123'
	title:'',
	body:'',
	imgUrl:'',
	date :
 }


 */




const  inititalState = {
	notes:[],
	active:null
}


	export const notesReducer = (state=inititalState,action)=>{


		switch (action.type) {


		case types.notesAddNew:
		return{
			...state,
			notes:[action.payload,...state.notes]
		}	
			
		
		case types.notesActive:
		//regresamos un nuevo estado junto con
		//lo que teniamos en el estado anterior
			return{
				...state,
				active:{
					...action.payload
				}
			}

		case types.notesLoad:
			//console.log(action.payload)
			return{
				...state,
				notes:[...action.payload]
				
			}

		case types.notesUpdated:
			
			return{
				...state,
				notes:state.notes.map(
					note => note.id === action.payload.id
					? action.payload.note
					: note
					)
			}

		case types.notesDelete:
			return{
				...state,
				active:null,
				notes:state.notes.filter(note => note.id !== action.payload)
			}	

			case types.notesLogoutCleaning:
			return {
				...state,
				active:null,
				notes:[]
			}	
			
		default:
		return state;
}



}












