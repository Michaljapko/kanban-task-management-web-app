import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const initialState: { device: 'mobile' | 'desktop' } = {
	device: 'desktop',
};
export const resolutionDeviceSlice = createSlice({
	name: 'resolutionDevice',
	initialState,
	reducers: {
		setMobile: (state) => {
			state.device = 'mobile';
		},
		setDesktop: (state) => {
			state.device = 'desktop';
		},
	},
});

export const { setDesktop, setMobile } = resolutionDeviceSlice.actions;

export const selectCurrentDevice = ({ resolutionDevice }: RootState) =>
	resolutionDevice.device;

export default resolutionDeviceSlice.reducer;
