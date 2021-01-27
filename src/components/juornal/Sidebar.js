import React from 'react';
import {JournalEntries} from './JournalEntries';
import {useDispatch,useSelector} from 'react-redux';
import { startLogout } from '../../actions/auth';
import {startNewNote} from '../../actions/notes'
export const Sidebar = () => {


	const dispatch = useDispatch();
	//extraemos el nombre logeado
	const {name} =  useSelector(state => state.auth)
	//console.log(auth)
	

	const handleLogout = ()=>{
		dispatch( startLogout())
		//console.log('click')
	}


	const handleAddNew =()=>{
		dispatch(startNewNote());
	}


	return (
		<aside className="journal__sidebar">
			
			<div 
			className="journal__sidebar-navbar">
				<h3 className="mt-5">

					<i className="fa fa-moon"></i>
					<span> {name} </span>
				</h3>

				<button 
				className="btn pointer"
				onClick = { handleLogout}
				>
				Logout
				</button>

			</div>

			<div 
			className="journal__new-entry pointer"
			onClick={handleAddNew}
			>
				<i className="far fa-calendar-plus fa-5x"></i>
				<p className="mt-5">
					New Entry
				</p>
			</div>	

			<JournalEntries/>



		</aside>
	)
}

