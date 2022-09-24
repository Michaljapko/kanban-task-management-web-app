import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { localStorageMiddleware } from './slices/helpers/localStorageMiddleware';
import layoutSlice from './slices/layoutSlice/layoutSlice';
import kanbanSlice from './slices/kanbanSlice/kanbanSlice';

export const store = configureStore({
  reducer: {
    kanbanSlice: kanbanSlice,
    layoutSlice: layoutSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
