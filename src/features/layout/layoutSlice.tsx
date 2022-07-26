import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const layoutSlice = createSlice({
	name: 'layoutSlice',
	initialState: { isSidebarShow: false },
	reducers: {
		setIsSidebarShow: (state) => {
			return (state = { isSidebarShow: !state.isSidebarShow });
		},
	},
});

export const { setIsSidebarShow } = layoutSlice.actions;
export const selectisSidebarShow = (state: RootState) => state.layoutSlice.isSidebarShow;

export default layoutSlice.reducer;
