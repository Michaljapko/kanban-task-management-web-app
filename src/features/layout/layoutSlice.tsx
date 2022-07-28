import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const layoutSlice = createSlice({
	name: 'layoutSlice',
	initialState: { isSidebarShow: false, isBoardAddShow: false },
	reducers: {
		setIsSidebarShow: (state) => {
			return (state = { ...state, isSidebarShow: !state.isSidebarShow });
		},
		setIsBoardAddShow: (state) => {
			return (state = { ...state, isBoardAddShow: !state.isBoardAddShow });
		},
	},
});

export const { setIsSidebarShow, setIsBoardAddShow } = layoutSlice.actions;
export const selectIsSidebarShow = (state: RootState) => state.layoutSlice.isSidebarShow;
export const selectIsBoardAddShow = (state: RootState) => state.layoutSlice.isBoardAddShow;

export default layoutSlice.reducer;
