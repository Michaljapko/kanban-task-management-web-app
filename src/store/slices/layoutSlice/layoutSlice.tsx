import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { getThemeMode } from './helpers/getThemeMode';
import { isSidebarShow } from './helpers/isSidebarShow';
import { toogleThemeReducer } from './helpers/toogleTheme';
import { layoutSliceState } from './type/layoutSlice.type';

const initialStateData: layoutSliceState = {
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
	theme: 'themeLight',
};
const initialState = (): layoutSliceState => {
	if (localStorage.getItem('layoutSlice')) {
		return JSON.parse(localStorage.getItem('layoutSlice')!);
	}
	return initialStateData;
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
		toogleTheme: (state) =>
			(state = { ...state, theme: toogleThemeReducer(state.theme) }),
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
	toogleTheme,
} = layoutSlice.actions;

export const selectLayout = ({ layoutSlice }: RootState) => layoutSlice;

export const selectCurrentTheme = ({ layoutSlice }: RootState) =>
	layoutSlice.theme;

export const selectThemeMode = ({ layoutSlice }: RootState) =>
	getThemeMode(layoutSlice.theme);

export default layoutSlice.reducer;
