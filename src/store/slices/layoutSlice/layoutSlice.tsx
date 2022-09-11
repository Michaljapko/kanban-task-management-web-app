import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const initialStateData = {
	isSidebarShow: true,
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
const initialState = () => {
	if (localStorage.getItem('layoutSlice')) {
		return JSON.parse(localStorage.getItem('layoutSlice')!);
	}
	return initialStateData;
};
const isSidebarShow = (state: typeof initialStateData) => {
	if (state.device === 'desktop') {
		return state.isSidebarShow;
	}
	if (state.device === 'mobile') {
		return false;
	}
};

export const layoutSlice = createSlice({
	name: 'layoutSlice',
	initialState,
	reducers: {
		setIsSidebarShow: (state) =>
			(state = {
				...initialStateData,
				isSidebarShow: !state.isSidebarShow,
				device: state.device,
			}),

		setIsBoardAddShow: (state) =>
			(state = {
				...initialStateData,
				isBoardAddShow: !state.isBoardAddShow,
				isSidebarShow: isSidebarShow(state)!,
				device: state.device,
			}),

		setIsBoardEditShow: (state) =>
			(state = {
				...initialStateData,
				isBoardEditShow: !state.isBoardEditShow,
				isSidebarShow: isSidebarShow(state)!,
				device: state.device,
			}),

		setIsTaskAddShow: (state) =>
			(state = {
				...initialStateData,
				isTaskAddShow: !state.isTaskAddShow,
				isSidebarShow: isSidebarShow(state)!,
				device: state.device,
			}),

		setIsDeleteTaskShow: (state) =>
			(state = {
				...initialStateData,
				isTaskDeleteShow: !state.isTaskDeleteShow,
				isSidebarShow: isSidebarShow(state)!,
				device: state.device,
			}),

		setIsDeleteBoardShow: (state) =>
			(state = {
				...initialStateData,
				isBoardDeleteShow: !state.isBoardDeleteShow,
				isSidebarShow: isSidebarShow(state)!,
				device: state.device,
			}),

		setIsTaskShow: (state) =>
			(state = {
				...initialStateData,
				isTaskShow: !state.isTaskShow,
				isSidebarShow: isSidebarShow(state)!,
				device: state.device,
			}),

		setIsTaskEditShow: (state) =>
			(state = {
				...initialStateData,
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

export const selectLayout = ({ layoutSlice }: RootState) => layoutSlice;

export default layoutSlice.reducer;
