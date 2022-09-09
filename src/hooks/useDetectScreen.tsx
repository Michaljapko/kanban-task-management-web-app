import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../app/hooks';
import {
	selectCurrentDevice,
	setDesktop,
	setMobile,
} from '../features/layout/layoutSlice';

export const useDetectScreen = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const dispatch = useDispatch();
	const currentDevice = useAppSelector(selectCurrentDevice);

	useEffect(() => {
		window.addEventListener('resize', () => setWidth(window.innerWidth));
		if (width >= 992 && currentDevice !== 'desktop') {
			dispatch(setDesktop());
		}
		if (width < 992 && currentDevice !== 'mobile') {
			dispatch(setMobile());
		}
		return () => {
			window.addEventListener('resize', () => setWidth(window.innerWidth));
		};
	}, [width, dispatch, currentDevice]);
};
