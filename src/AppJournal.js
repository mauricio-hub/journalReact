import React from 'react';
import {Provider} from 'react-redux';
import {AppRouter} from './routers/AppRouters.js';
import {store} from './store/store'
/*Provider contiene toda la informacion del stores*/
export const AppJournal = () => {
	return (
		
		<Provider store={store}>
		<AppRouter/>
		</Provider>
	)
}



