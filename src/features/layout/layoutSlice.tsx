import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const initialState = {
	isSidebarShow: false,
	isTaskAddShow: false,
	isTaskEditShow: false,
	isBoardAddShow: false,
	isBoardDeleteShow: false,
	isTaskDeleteShow: false,
	isTaskShow: false,
	isDropDownShow: false,
	isBoardEditShow: false,
};
export const layoutSlice = createSlice({
	name: 'layoutSlice',
	initialState,
	reducers: {
		setIsSidebarShow: (state) =>
			(state = { ...initialState, isSidebarShow: !state.isSidebarShow }),
		setIsBoardAddShow: (state) =>
			(state = {
				...initialState,
				isSidebarShow: false,
				isBoardAddShow: !state.isBoardAddShow,
			}),
		setIsBoardEditShow: (state) =>
			(state = {
				...initialState,
				isSidebarShow: false,
				isBoardEditShow: !state.isBoardEditShow,
			}),
		setIsTaskAddShow: (state) =>
			(state = {
				...initialState,
				isSidebarShow: false,
				isTaskAddShow: !state.isTaskAddShow,
			}),
		setIsDeleteTaskShow: (state) =>
			(state = { ...initialState, isTaskDeleteShow: !state.isTaskDeleteShow }),
		setIsDeleteBoardShow: (state) =>
			(state = {
				...initialState,
				isBoardDeleteShow: !state.isBoardDeleteShow,
			}),
		setIsTaskShow: (state) =>
			(state = { ...initialState, isTaskShow: !state.isTaskShow }),
		setIsTaskEditShow: (state) =>
			(state = {
				...initialState,
				isTaskShow: !state.isTaskShow,
				isTaskEditShow: !state.isTaskEditShow,
			}),
		setIsDropDownShow: (state) =>
			(state = { ...state, isDropDownShow: !state.isDropDownShow }),
	},
});

export const {
	setIsSidebarShow,
	setIsBoardAddShow,
	setIsDeleteBoardShow,
	setIsDeleteTaskShow,
	setIsTaskAddShow,
	setIsTaskShow,
	setIsDropDownShow,
	setIsBoardEditShow,
	setIsTaskEditShow,
} = layoutSlice.actions;

export const selectIsSidebarShow = (state: RootState) =>
	state.layoutSlice.isSidebarShow;
export const selectIsBoardAddShow = (state: RootState) =>
	state.layoutSlice.isBoardAddShow;
export const selectIsBoardEditShow = (state: RootState) =>
	state.layoutSlice.isBoardEditShow;
export const selectIsTaskAddShow = (state: RootState) =>
	state.layoutSlice.isTaskAddShow;
export const selectIsTaskEditShow = (state: RootState) =>
	state.layoutSlice.isTaskEditShow;
export const selectIsDeleteBoardShow = (state: RootState) =>
	state.layoutSlice.isBoardDeleteShow;
export const selectIsDeleteTaskShow = (state: RootState) =>
	state.layoutSlice.isTaskDeleteShow;
export const selectIsTaskShow = (state: RootState) =>
	state.layoutSlice.isTaskShow;
export const selectIsDropDownShow = (state: RootState) =>
	state.layoutSlice.isDropDownShow;

export default layoutSlice.reducer;
