import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import layoutSlice from '../features/layout/layoutSlice';
import boardSlice from '../features/tasks/boardSlice';
import columnSlice from '../features/tasks/columnSlice';
import taskActionSlice from '../features/tasks/taskActionSlice';
import taskSlice from '../features/tasks/taskSlice';
import themeSlice from '../features/layout/themeSlice';

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
