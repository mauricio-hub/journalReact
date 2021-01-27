import Swal from 'sweetalert2';
import {db} from '../firebase/firebase-config';
import {types} from '../types/types';
import {loadNotes} from '../helpers/loadNotes';
import {fileUpload} from '../helpers/fileUpload';

export const startNewNote = ()=>{
	return async(dispatch,getState)=>{
		//getState es una funcion que permite 
		//obtener el state de la app es parecido al useSelector
		//accedemos al uid del usuario
		const {uid} = getState().auth;


		const newNote = {
			title:'',
			body:'',
			date: new Date().getTime()
		}
		
		//creamos el documento en firebase
		//con documento(journal) coleccion(notes) 		
		//add es una prmesa por lo tanto podemos utilizar async await
		const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

		 //console.log(doc)
		 //aqui enviamos el dispatch al reducer
		 dispatch(activeNote(doc.id,newNote));
		 dispatch(AddNewNote(doc.id,newNote));
	}
}


///creamos los datos que el note reducer nececita

export const activeNote = (id,note)=>({
	type:types.notesActive,
	payload:{
		id,
		...note
	}
});

export const AddNewNote= (id,note)=>({
	type:types.notesAddNew,
	payload:{
		id,...note
	}
})

export const startLoadingNotes = (uid)=>{
	return async (dispatch)=> {
		const notes = await loadNotes(uid);
		dispatch(setNotes(notes))
	}
}





//cargando las notas de la base de datos

export  const setNotes = (notes) =>({

	type:types.notesLoad,
	payload: notes

	
});


export const startSaveNotes = (note)=>{

	return async (dispatch,getState)=>{
		//getState es una funcion que permite 
		//obtener el state de la app es parecido al useSelector
		//accedemos al uid del usuario
		const {uid} = getState().auth;

		//si no viene en la nota el url se borra
		if(!note.url){
			delete note.url;
		}

		
		const noteToFirestore= {...note};
		//eliminamos el id de la nota ya que viene
		//id de firestore
		delete noteToFirestore.id;
		await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore)
	
		dispatch(refreshNote(note.id,noteToFirestore))
		Swal.fire('Saved',note.title,'success');

	}

}


export const refreshNote = (id,note)=>({
	type:types.notesUpdated,
	payload:{
		id,
		note:{
			id,
			...note
		}
	}
})


export const startUploading  =(file)=>{
	return async (dispatch,getState)=>{
		const {active:activeNote} = getState().notes;

		Swal.fire({
			title:'Uploading...',
			text:'Please wait...',
			allowOutsideClick:false,
			onBeforeOpen:()=>{
				Swal.showLoading();
			}

		});

		const fileUrl = await fileUpload(file)
		activeNote.url = fileUrl
		//console.log(fileUrl)

		dispatch(startSaveNotes(activeNote))

		Swal.close();
	}
}

export const startDeleting =(id)=>{
	return async(dispatch,getState)=>{
		const uid  = getState().auth.uid; 
		await db.doc(`${uid}/journal/notes/${id}`).delete();
		
		dispatch(deleteNote(id));

	}
}


export const deleteNote = (id)=>({
	type:types.notesDelete,
	payload:id
})


export const noteLogout =()=>({
	type:types.notesLogoutCleaning

})



