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
	isDropdownHeaderShow: false,
	isDropdownTaskShow: false,
	isBoardEditShow: false,
	device: 'desktop',
};

const isSidebarShow = (state: typeof initialState) => {
	if (state.device === 'desktop') return state.isSidebarShow;
	if (state.device === 'mobile') return false;
};
export const layoutSlice = createSlice({
	name: 'layoutSlice',
	initialState,
	reducers: {
		setIsSidebarShow: (state) =>
			(state = {
				...initialState,
				isSidebarShow: !state.isSidebarShow,
				device: state.device,
			}),

		setIsBoardAddShow: (state) =>
			(state = {
				...initialState,
				isBoardAddShow: !state.isBoardAddShow,
				isSidebarShow: isSidebarShow(state)!,
				device: state.device,
			}),
		setIsBoardEditShow: (state) =>
			(state = {
				...initialState,
				isBoardEditShow: !state.isBoardEditShow,
				isSidebarShow: isSidebarShow(state)!,
				device: state.device,
			}),
		setIsTaskAddShow: (state) =>
			(state = {
				...initialState,
				isTaskAddShow: !state.isTaskAddShow,
				isSidebarShow: isSidebarShow(state)!,
				device: state.device,
			}),
		setIsDeleteTaskShow: (state) =>
			(state = {
				...initialState,
				isTaskDeleteShow: !state.isTaskDeleteShow,
				isSidebarShow: isSidebarShow(state)!,
				device: state.device,
			}),

		setIsDeleteBoardShow: (state) =>
			(state = {
				...initialState,
				isBoardDeleteShow: !state.isBoardDeleteShow,
				isSidebarShow: isSidebarShow(state)!,
				device: state.device,
			}),
		setIsTaskShow: (state) =>
			(state = {
				...initialState,
				isTaskShow: !state.isTaskShow,
				isSidebarShow: isSidebarShow(state)!,
				device: state.device,
			}),
		setIsTaskEditShow: (state) =>
			(state = {
				...initialState,
				isTaskShow: !state.isTaskShow,
				isTaskEditShow: !state.isTaskEditShow,
				isSidebarShow: isSidebarShow(state)!,
				device: state.device,
			}),
		setIsDropdownHeaderShow: (state) =>
			(state = {
				...state,
				isDropdownHeaderShow: !state.isDropdownHeaderShow,
				isSidebarShow: isSidebarShow(state)!,
				device: state.device,
			}),
		setIsDropdownTaskShow: (state) =>
			(state = {
				...state,
				isDropdownTaskShow: !state.isDropdownTaskShow,
				isSidebarShow: isSidebarShow(state)!,
				device: state.device,
			}),

		setMobile: (state) => (state = { ...state, device: 'mobile' }),
		setDesktop: (state) => (state = { ...state, device: 'desktop' }),
	},
});

export const {
	setIsSidebarShow,
	setIsBoardAddShow,
	setIsDeleteBoardShow,
	setIsDeleteTaskShow,
	setIsTaskAddShow,
	setIsTaskShow,
	setIsDropdownHeaderShow,
	setIsDropdownTaskShow,
	setIsBoardEditShow,
	setIsTaskEditShow,
	setMobile,
	setDesktop,
} = layoutSlice.actions;

export const selectIsSidebarShow = ({ layoutSlice }: RootState) =>
	layoutSlice.isSidebarShow;
export const selectIsBoardAddShow = ({ layoutSlice }: RootState) =>
	layoutSlice.isBoardAddShow;
export const selectIsBoardEditShow = ({ layoutSlice }: RootState) =>
	layoutSlice.isBoardEditShow;
export const selectIsTaskAddShow = ({ layoutSlice }: RootState) =>
	layoutSlice.isTaskAddShow;
export const selectIsTaskEditShow = ({ layoutSlice }: RootState) =>
	layoutSlice.isTaskEditShow;
export const selectIsDeleteBoardShow = ({ layoutSlice }: RootState) =>
	layoutSlice.isBoardDeleteShow;
export const selectIsDeleteTaskShow = ({ layoutSlice }: RootState) =>
	layoutSlice.isTaskDeleteShow;
export const selectIsTaskShow = ({ layoutSlice }: RootState) =>
	layoutSlice.isTaskShow;
export const selectIsDropdownHeaderShow = ({ layoutSlice }: RootState) =>
	layoutSlice.isDropdownHeaderShow;
export const selectIsDropdownTaskShow = ({ layoutSlice }: RootState) =>
	layoutSlice.isDropdownTaskShow;
export const selectCurrentDevice = ({ layoutSlice }: RootState) =>
	layoutSlice.device;

export default layoutSlice.reducer;
