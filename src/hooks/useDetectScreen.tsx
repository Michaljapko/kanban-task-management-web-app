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

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    if (width >= 992 && currentDevice !== 'desktop') {
      dispatch(setDesktop());
    }
    if (width < 992 && currentDevice !== 'mobile') {
      dispatch(setMobile());
      dispatch(setIsSidebarShow());
    }
    return () => {
      window.addEventListener('resize', () => setWidth(window.innerWidth));
    };
  }, [width, dispatch, currentDevice]);
};
