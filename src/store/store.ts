import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import layoutSlice from './slices/layoutSlice/layoutSlice';
import boardSlice from './slices/boardSlice/boardSlice';
import columnSlice from './slices/columnSlice/columnSlice';
import taskActionSlice from './slices/taskActionSlice/taskActionSlice';
import taskSlice from './slices/taskSlice/taskSlice';
import themeSlice from './slices/themeSlice/themeSlice';

export const store = configureStore({
	reducer: {
		taskAction: taskActionSlice,
		currentBoardId: boardSlice,
		currentColumnId: columnSlice,
		currentTask: taskSlice,
		layoutSlice: layoutSlice,
		themeSlice: themeSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
