import { Middleware } from '@reduxjs/toolkit';

export const localStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		const result = next(action);
		if (result.type.startsWith('taskAction/')) {
			const state = store.getState().taskAction;
			localStorage.setItem('taskAction', JSON.stringify(state));
		}
		if (result.type.startsWith('layoutSlice/setIsSidebarShow')) {
			const state = store.getState().layoutSlice;
			localStorage.setItem('layoutSlice', JSON.stringify(state));
		}
		if (result.type.startsWith('themeSlice/toogleTheme')) {
			const state = store.getState().themeSlice;
			localStorage.setItem('themeSlice', JSON.stringify(state));
		}

		return result;
	};
