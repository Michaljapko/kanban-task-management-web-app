import { layoutSliceState } from '../types/layoutSlice.type';

export const isSidebarShow = (state: layoutSliceState) => {
  if (state.device === 'desktop') {
    return state.isSidebarShow;
  }
  if (state.device === 'mobile') {
    return false;
  }
};
