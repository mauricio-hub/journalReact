import React ,{useEffect,useRef} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {NotesAppBar} from './NotesAppBar';
import {useForm} from '../../hooks/useForm';
import {activeNote} from '../../actions/notes';
import {startDeleting} from '../../actions/notes';
export const NoteScreen = () => {
	
	const dispatch = useDispatch()	

	//renombrado activi a note 
	const {active:note} = useSelector(state=>state.notes)
	
	const [formValues,handleInputChange,reset]= useForm(note);

	//console.log(formValues)
	const {body ,title,id} = formValues

	//console.log(note)

	const activeId = useRef(note.Id)


	useEffect(() => {
		//esto se dispara cuando
		//la nota activa sea otra a la actual		  
		  if(note.id!== activeId.current){
		  	reset(note)
		  	activeId.current = note.id
		  }

	}, [note,reset])


	useEffect(() => {
		
		dispatch(activeNote(formValues.id,{...formValues}));

	}, [formValues,dispatch])

	const handleDelete = ()=>{
		

		dispatch(startDeleting(id))
	}

	return (
		<div className="notes__main-content">
			
			<NotesAppBar/>

			<div className="notes__content">
				<input 
				type="text"
				placeholder="Some awesome title"
				className="notes__title-input"
				autoComplete="off"
				name="title"
				onChange={handleInputChange}
				value={title}
				/>

				<textarea
					placeholder="What happend today"
					className="notes__textarea"
					name="body"
					onChange={handleInputChange}
					value={body}
				>

				</textarea>



				{
					(note.url)
					&&
						(		
						<div className="notes__image">
						<img src={note.url} 
						alt="Imagen"/>
						</div>
						)
				}


			</div>

			<button 
			className="btn btn-danger pointer"
			onClick={handleDelete}

			>

				Delete

			</button>

		</div>
	)
}

