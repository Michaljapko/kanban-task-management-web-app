import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const layoutSlice = createSlice({
	name: 'layoutSlice',
	initialState: { isSidebarShow: false, isTaskAddShow: false, isBoardAddShow: false, isPopUpShow: false, isTaskShow: false },
	reducers: {
		setIsSidebarShow: (state) => {
			return (state = { ...state, isSidebarShow: !state.isSidebarShow });
		},
		setIsBoardAddShow: (state) => {
			return (state = { ...state, isSidebarShow: false, isBoardAddShow: !state.isBoardAddShow });
		},
		setIsTaskAddShow: (state) => {
			return (state = { ...state, isSidebarShow: false, isTaskAddShow: !state.isTaskAddShow });
		},
		setIsPopUpShow: (state) => {
			return (state = { ...state, isPopUpShow: !state.isPopUpShow });
		},
		setIsTaskShow: (state) => {
			return (state = { ...state, isTaskShow: !state.isTaskShow });
		},
	},
});

export const { setIsSidebarShow, setIsBoardAddShow, setIsPopUpShow, setIsTaskAddShow, setIsTaskShow } = layoutSlice.actions;
export const selectIsSidebarShow = (state: RootState) => state.layoutSlice.isSidebarShow;
export const selectIsBoardAddShow = (state: RootState) => state.layoutSlice.isBoardAddShow;
export const selectIsTaskAddShow = (state: RootState) => state.layoutSlice.isTaskAddShow;
export const selectIsPopUpShow = (state: RootState) => state.layoutSlice.isPopUpShow;
export const selectIsTaskShow = (state: RootState) => state.layoutSlice.isTaskShow;

export default layoutSlice.reducer;
