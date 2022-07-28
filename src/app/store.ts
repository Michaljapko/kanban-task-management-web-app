import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import layoutSlice from '../features/layout/layoutSlice';
import boardSlice from '../features/tasks/boardSlice';
import tasksReducer from '../features/tasks/tasksSlice';

export const store = configureStore({
	reducer: {
		tasks: tasksReducer,
		currentBoardId: boardSlice,
		layoutSlice: layoutSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
