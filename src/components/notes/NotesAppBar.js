import React from 'react';
import {startSaveNotes} from '../../actions/notes'; 
import {useSelector,useDispatch} from 'react-redux';
import {startUploading } from '../../actions/notes'
export const NotesAppBar = () => {

	const dispatch = useDispatch();
	//renombrado active a note 
	const {active} = useSelector(state=>state.notes)


	const handleSave = ()=>{
		//console.log(note)
		dispatch(startSaveNotes(active))
	}

	const handlePictureClick =()=>{
		//console.log('cucaaaa!!!')
		document.querySelector('#fileSelector').click();
	}

const handleFileChange = (e)=>{
	//e.preventDefault()
	//console.log(e.target.files)
	const file = e.target.files[0]

	if (file) {
		dispatch(startUploading(file))
	}
}


	return (
		<div className="notes__appbar">

		
		<span>18 Noviembre 2020</span>

		<input
		id="fileSelector"
		type="file"
		name="file"
		style={{display:'none'}}
		onChange={handleFileChange}
		/>

		<div>
			<button 
			className="btn pointer"
			onClick= {handlePictureClick}
			>
				Picture
			</button>
			
			<button 
			className="btn pointer"
			onClick= {handleSave}
			>
				Save
			</button>

		</div>

		</div>
	)
}

