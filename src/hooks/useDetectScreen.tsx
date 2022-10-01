import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'store/hooks';
import {
  selectLayout,
  setDesktop,
  setMobile,
  setIsSidebarShow,
} from 'store/slices/layoutSlice/layoutSlice';

export const useDetectScreen = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const currentDevice = useAppSelector(selectLayout).device;
  const setWidthListener = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', setWidthListener);
    if (width >= 992 && currentDevice !== 'desktop') {
      dispatch(setDesktop());
    }
    if (width < 992 && currentDevice !== 'mobile') {
      dispatch(setMobile());
      dispatch(setIsSidebarShow());
    }
    return () => {
      window.removeEventListener('resize', setWidthListener);
    };
  }, [width, dispatch, currentDevice]);
};
