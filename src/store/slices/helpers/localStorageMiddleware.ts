import { Middleware } from '@reduxjs/toolkit';

export const localStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		const result = next(action);
		// if (result.type.startsWith('taskAction/')) {
		// 	const state = store.getState().taskAction;
		// 	localStorage.setItem('taskAction', JSON.stringify(state));
		// }
		if (result.type.startsWith('layoutSlice/')) {
			const state = store.getState().layoutSlice;
			localStorage.setItem('layoutSlice', JSON.stringify(state));
		}

		return result;
	};
