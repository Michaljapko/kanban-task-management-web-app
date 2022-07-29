import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const layoutSlice = createSlice({
	name: 'layoutSlice',
	initialState: { isSidebarShow: false, isBoardAddShow: false, isPopUpShow: false },
	reducers: {
		setIsSidebarShow: (state) => {
			return (state = { ...state, isSidebarShow: !state.isSidebarShow });
		},
		setIsBoardAddShow: (state) => {
			return (state = { ...state, isSidebarShow: false, isBoardAddShow: !state.isBoardAddShow });
		},
		setIsPopUpShow: (state) => {
			return (state = { ...state, isPopUpShow: !state.isPopUpShow });
		},
	},
});

export const { setIsSidebarShow, setIsBoardAddShow, setIsPopUpShow } = layoutSlice.actions;
export const selectIsSidebarShow = (state: RootState) => state.layoutSlice.isSidebarShow;
export const selectIsBoardAddShow = (state: RootState) => state.layoutSlice.isBoardAddShow;
export const selectIsPopUpShow = (state: RootState) => state.layoutSlice.isPopUpShow;

export default layoutSlice.reducer;
