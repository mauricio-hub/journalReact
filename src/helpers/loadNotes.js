import {db} from '../firebase/firebase-config'


//cargar notas de firestore
export const loadNotes = async(uid) =>{
	//creamos el path de notes junto con el metodo get de firebase
	const notesSnap = await	db.collection(`${uid}/journal/notes`).get();

	const notes = [];

	notesSnap.forEach( snaphijo =>  {
		notes.push({
			id:snaphijo.id,
			...snaphijo.data()

		})
	});

//console.log(notes)


	return notes

}